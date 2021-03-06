// 输入框中没有任何输入内容->无提示框
// 输入框中输入了很多半角或者全角的空格->无提示框
// 输入框中输入了"abc"->出现提示框，提示框中的内容为abc开头，后面跟着@163.com，@gmail.com等一系列的提示
// 输入框中输入了" abc "->出现提示框，提示框中的内容为abc开头，后面跟着@163.com，@gmail.com等一系列的提示
// 输入框中先输入"abc"，然后再全部删掉->输入abc时出现提示框，全部删除后提示框消失

var inputDom = document.getElementById("email-input");
var ulDom = document.getElementById("email-sug-wrapper");
inputDom.oninput = function () {
    var userInput = getInput();
    // 控制email-sug-wrapper的显示/隐藏状态
    if (userInput) {
        var liValues = createHint(userInput);
        addHint(liValues);
    } else {
        hideHint();
    }
}
// 生成提示框中的提示内容
function createHint(str) {
    var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
    for (i = 0; i < postfixList.length; i++) {
        postfixList[i] = str + '@' + postfixList[i];
    }
    return postfixList;
}
// 将提示内容添加到email-sug-wrapper中
function addHint(arr) {
    // ulDom.innerHTML = '';
    hideHint();
    for (let i = 0; i < arr.length; i++) {
        var liHint = document.createElement("li");
        liHint.innerHTML = arr[i];
        ulDom.appendChild(liHint);
    }
}
// 获取用户输入
function getInput() {
    var str = inputDom.value;
    return str.replace(/(^\s*)|(\s*)$/g, '');
}

function hideHint() {
    ulDom.innerHTML = '';
}

// function showHint() {
//     ulDom.style.display = "block";
// }