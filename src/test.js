function limit(val, max) {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';

      //this can happen when user paste number
    } else if (val > max) {
      val = max;
    }
  }

  return val;
}

function cardExpiry(val) {
  let month = limit(val.substring(0, 2), '12');
  let year = val.substring(2, 4);

  return month + (year.length ? '/' + year : '');
};

const a = cardExpiry('33');
console.log(a);


if (this.state.amount.length > 0 &&
  this.state.cardHolder &&
  this.state.expires.length == 5 &&
  this.state.cvc.length == 3 &&
  this.state.terms == true &&
  this.state.errors.pan.length == 0 &&
  !this.state.formIsValid) {
  this.setState({
    formIsValid: true,
  });