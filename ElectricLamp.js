function SwitchButton() {
    this.switchOn = function () {
       this.ElectricLamp.TurnOn();
    };
    this.switchOff = function () {
        this.ElectricLamp.TurnOff();
    };
    this.connectToLamp = function (ElectricLamp) {
        this.ElectricLamp = ElectricLamp;
    }
}
function ElectricLamp() {
    this.TurnOn = function () {
        document.write("đèn đã sáng " + "<br>")
    };
    this.TurnOff =function () {
        document.write("đèn đã tắt "+ "<br>"+"<hr>")
    };
}
let swicthButton = new SwitchButton();
let electricLamp = new ElectricLamp();
swicthButton.connectToLamp(electricLamp);
for(let i=0;i<10;i++){
    alert("TurnOn");
    swicthButton.switchOn();
    alert("TurnOff");
    swicthButton.switchOff();
}