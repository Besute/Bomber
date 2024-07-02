import time
import pyautogui
import sys 

def SendMessage():
    message = sys.argv[1]
    count = int(sys.argv[2])
    print(count)
    time.sleep(3)
    while count > 0  :
        count-=1
        pyautogui.typewrite(message.strip())
        pyautogui.press('enter')
SendMessage()