class Car{
  constructor(make, model, year, isAvailable) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }

  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}

class Rental {
constructor(car,rentalName,rentalStartDate,rentalEnsDate){
    this.car = car;
    this.rentalName = rentalName;
    this.rentalStartDate = rentalStartDate;
    this.rentalEnsDate = rentalEnsDate;


}
 calculateRentalDuration(){
    const dayOne = this.rentalStartDate;
    const lastDay = this.rentalEnsDate;
    const duration = math.round(math.abs(lastDay - dayOne));
    return duration
 }

}
const carA = new Car("Mazda", "Demio", 2000, true);
const rentalA = new Rental(carA, "Lucky","13-03-2023", "30-03-2023");

const rentalDuration = rentalA.calculateRentalDuration();
console.log(`Rental time is ${rentalDuration}`);


class Questions{
constructor(text, options, correctAnswer){
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
}
checkAnswer(userAnswer){
   for(let i = 0; i < this.options.length; i++){
      if(this.options[i] === userAnswer && userAnswer === userAnswer){
        return true;
      } else {
        return false;
      }
   } 

}
}