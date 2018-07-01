export const helper = {
  moneyFormat(value: number){
    const _value = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').split('.');
    _value.pop()
    return _value.join('.');
  }
}
