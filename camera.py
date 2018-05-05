import threading
import cv2

facePath = "data/lbpcascade_frontalface.xml"
faceCascade = cv2.CascadeClassifier(facePath)

smilePath = "data/haarcascade_smile.xml"
smileCascade = cv2.CascadeClassifier(smilePath)

def Detect():
    # counter used to clear points for the rectangle
    counter1 = 0
    counter2 = 0
    global facepts
    global smilepts
    global meter
    meter = 50
    while True:
        ret, image = VideoCamera().read()  # Capture frame-by-frame
        image = cv2.resize(image, (0, 0), fx=0.4, fy=0.4)
    
        try:
            gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        except:
            # probably should try something else to end the thread
            break

        counter1 += 1
        counter2 += 1

        # Find face
        faces = faceCascade.detectMultiScale(gray, 1.05, 10)
        
        # Draw a rectangle around the faces
        for (x, y, w, h) in faces:
            counter1 = 0
            roi_gray = gray[y:y+h, x:x+w]

            facepts = x, y, w, h
            #meter +=10

            # Find smile
            smile = smileCascade.detectMultiScale(roi_gray, 1.7, 14)

            # Draw a rectangle around the smile
            for (x, y, w, h) in smile:
                counter2 = 0
                a, b, c, d = facepts
                smilepts = (x+a), (y+b), w, h
                #meter += 10

        if counter1 == 2:
            facepts = (1,1,1,1)
        if counter2 == 2:
            smilepts = (1,1,1,1)
            #meter -= 2
        


class VideoCamera(object):
    def __init__(self):
        # Using OpenCV to capture from device 0 and read the first frame
        self.video = cv2.VideoCapture(0)
        
        # start the face, smile recognition thread
        t = threading.Thread(target=Detect, name='thread1', args=())
        t.start()
    
    def __del__(self):
        self.video.release()

    def read(self):
        return self.video.read()
    
    def get_frame(self):
        success, image = self.video.read()
        image = cv2.resize(image, (0, 0), fx=0.4, fy=0.4)
        # We are using Motion JPEG, but OpenCV defaults to capture raw images,
        # so we must encode it into JPEG in order to correctly display the
        # video stream.

        try:
            # draw rectangles for face
            x, y, w, h = facepts  # get points from global variable
            cv2.rectangle(image, (x, y), (x+w, y+h), (0, 0, 255), 2)
            
            # draw rectangles for smile
            x2, y2, w2, h2 = smilepts
            cv2.rectangle(image, (x2, y2), (x2+w2, y2+h2), (255, 255, 255), 2)

        except NameError:
            print('waiting')
       
        cv2.rectangle(image, (20, 210), (meter+20, 220), (0, 255, 0), cv2.FILLED)

             
        # smile meter
        #font = ImageFont.truetype('Roboto-Regular.ttf',30)
        #draw.text((5,300),'smile meter:', font=font)
        

        ret, jpeg = cv2.imencode('.jpg', image)
        return jpeg.tobytes()
