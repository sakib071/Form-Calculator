function insertNumber(number) {
    var existingNumber = $("#result").val();

    $("#result").val(existingNumber + number)
}
function clearResult() {
    $("#result").val('')
}
function calculate() {
    var result = eval($("#result").val())
    $("#result").val(result)
}
function dltnumber() {
    var value = $("#result").val()
    if(value!=''){
        $("#result").val(value.slice(0, -1))
    }
} 