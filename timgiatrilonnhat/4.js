


let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
let index = 0;
//gan tam so lon nhat vi tri o

// lap kiem tra xem nao lon nhat bang cach so so i voi so khac. khi i nho hon thi lay vitri so moi so voi so khac
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}
alert(`Số lớn nhất là ${max} tại vị trí ${index}`);
