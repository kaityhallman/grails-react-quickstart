package demo

import demo.Driver
import demo.Make
import demo.Model
import demo.Vehicle

class BootStrap {

    def init = { servletContext ->
      log.info 'Loading database...'
      def driver1 = new Driver(name: 'Kaity').save()
      def driver2 = new Driver(name: 'Mark').save()

      def scion = new Make(name: 'Scion').save()
      def kia = new Make(name: 'Kia').save()

      def xb = new Model(name: 'xB').save()
      def forte = new Model(name: 'Forte').save()

      new Vehicle(name: 'Kaity\'s Car', driver: driver1, make: scion, model: xb).save()
      new Vehicle(name: 'Mark\'s Car', driver: driver2, make: kia, model: forte).save()
    }
    def destroy = {
    }
}
