import mraa
import time

ledPin = mraa.Gpio(13)

ledPin.dir(mraa.DIR_OUT)


while True:

	ledPin.write(1)
	time.sleep(1)
	ledPin.write(0)
	time.sleep(1)
