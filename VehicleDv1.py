#! /usr/bin/python
 
import cv2
import time
face_cascade = cv2.CascadeClassifier('cars.xml')
vc = cv2.VideoCapture('road.mp4')
 
if vc.isOpened():
    rval , frame = vc.read()
else:
    rval = False
 
a = 1

while rval:
    rval, frame = vc.read()
 
    # car detection.
    cars = face_cascade.detectMultiScale(frame, 1.1, 2)
 
    ncars = 0
    for (x,y,w,h) in cars:
        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,0,255),2)
        ncars = ncars + 1
 
    # show result
    cv2.imshow("Okay",frame)
    a+=1
    x=open("/home/manish/Desktop/Testttt/data.txt","w");
    x.write(str(ncars));
    x.close();
    print ncars
    cv2.waitKey(1);
vc.release()
