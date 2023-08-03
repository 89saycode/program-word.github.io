var words = [
    { chinese: "变量", english: "variable" },
    { chinese: "函数", english: "function" },
    { chinese: "类", english: "class" },
    { chinese: "对象", english: "object" },
    { chinese: "数组", english: "array" },
    { chinese: "字符串", english: "string" },
    { chinese: "整数", english: "integer" },
    { chinese: "浮点数", english: "float" },
    { chinese: "布尔值", english: "boolean" },
    { chinese: "条件语句", english: "conditional statement" },
    { chinese: "循环", english: "loop" },
    { chinese: "列表", english: "list" },
    { chinese: "字典", english: "dictionary" },
    { chinese: "模块", english: "module" },
    { chinese: "库", english: "library" },
    { chinese: "参数", english: "parameter" },
    { chinese: "返回值", english: "return value" },
    { chinese: "异常", english: "exception" },
    { chinese: "调试", english: "debugging" },
    { chinese: "注释", english: "comment" },
    { chinese: "算法", english: "algorithm" },
    { chinese: "递归", english: "recursion" },
    { chinese: "面向对象", english: "object-oriented" },
    { chinese: "接口", english: "interface" },
    { chinese: "继承", english: "inheritance" },
    { chinese: "多态", english: "polymorphism" },
    { chinese: "封装", english: "encapsulation" },
    { chinese: "抽象", english: "abstraction" },
    { chinese: "数据库", english: "database" },
    { chinese: "服务器", english: "server" },
    { chinese: "客户端", english: "client" },
    { chinese: "请求", english: "request" },
    { chinese: "响应", english: "response" },
    { chinese: "路由", english: "route" },
    { chinese: "框架", english: "framework" },
    { chinese: "版本控制", english: "version control" },
    { chinese: "命名规范", english: "naming convention" },
    { chinese: "编码", english: "coding" },
    { chinese: "测试", english: "testing" },
    { chinese: "调优", english: "optimization" },
    { chinese: "安全性", english: "security" },
    { chinese: "性能", english: "performance" },
    { chinese: "错误处理", english: "error handling" },
    { chinese: "日志", english: "log" },
    { chinese: "调用", english: "invoke" },
    { chinese: "打印", english: "print" },
    { chinese: "排序", english: "sort" },
    { chinese: "搜索", english: "search" },
    { chinese: "迭代", english: "iteration" },
    { chinese: "存储", english: "storage" },
    { chinese: "缓存", english: "cache" },
    { chinese: "同步", english: "synchronization" },
    { chinese: "异步", english: "asynchronization" },
    { chinese: "并发", english: "concurrency" },
    { chinese: "线程", english: "thread" },
    { chinese: "进程", english: "process" },
    { chinese: "文件", english: "file" },
    { chinese: "输入", english: "input" },
    { chinese: "输出", english: "output" },
    { chinese: "网络", english: "network" },
    { chinese: "协议", english: "protocol" },
    { chinese: "加密", english: "encryption" },
    { chinese: "解密", english: "decryption" },
    { chinese: "认证", english: "authentication" },
    { chinese: "授权", english: "authorization" },
    { chinese: "安装", english: "installation" },
    { chinese: "配置", english: "configuration" },
    { chinese: "部署", english: "deployment" },
    { chinese: "服务器", english: "server" },
    { chinese: "客户端", english: "client" },
    { chinese: "请求", english: "request" },
    { chinese: "响应", english: "response" },
    { chinese: "路由", english: "route" },
    { chinese: "框架", english: "framework" },
    { chinese: "版本控制", english: "version control" },
    { chinese: "命名规范", english: "naming convention" },
    { chinese: "编码", english: "coding" },
    { chinese: "测试", english: "testing" },
    { chinese: "调优", english: "optimization" },
    { chinese: "安全性", english: "security" },
    { chinese: "性能", english: "performance" },
    { chinese: "错误处理", english: "error handling" },
    { chinese: "日志", english: "log" },
    { chinese: "调用", english: "invoke" },
    { chinese: "打印", english: "print" },
    { chinese: "排序", english: "sort" },
    { chinese: "搜索", english: "search" },
    { chinese: "迭代", english: "iteration" },
    { chinese: "存储", english: "storage" },
    { chinese: "缓存", english: "cache" },
    { chinese: "同步", english: "synchronization" },
    { chinese: "异步", english: "asynchronization" },
    { chinese: "并发", english: "concurrency" },
    { chinese: "线程", english: "thread" },
    { chinese: "进程", english: "process" },
    { chinese: "文件", english: "file" },
    { chinese: "输入", english: "input" },
    { chinese: "输出", english: "output" },
    { chinese: "网络", english: "network" },
    { chinese: "协议", english: "protocol" },
    { chinese: "加密", english: "encryption" },
    { chinese: "解密", english: "decryption" },
    { chinese: "认证", english: "authentication" },
    { chinese: "授权", english: "authorization" },
    { chinese: "安装", english: "installation" },
    { chinese: "配置", english: "configuration" },
    { chinese: "部署", english: "deployment" }
];
var currentWordIndex = 0;
var currentWord = words[currentWordIndex];
var inputElement = document.getElementById("input-word");
var wordContainer = document.getElementById("word-container");
var wordTime = document.getElementById("word-time");
var wordNum = document.getElementById("word-num");
var errNum = document.getElementById("err-num");
var modal = document.getElementById("myModal");

var startTime = 0;
var typingStats = {
  totalWords: words.length,
  correctWords: 0,
  incorrectChar: 0,
};

function displayWord() {
  wordContainer.innerHTML = "";
  var chineseSpan = document.createElement("div");
  chineseSpan.textContent = currentWord.chinese;
  wordContainer.appendChild(chineseSpan);
  var spaceSpan = document.createElement("div");
  wordContainer.appendChild(spaceSpan);

  // 遍历输入的字符，并比较与原单词的匹配情况
  for (var i = 0; i < currentWord.english.length; i++) {
    var span = document.createElement("span");
    span.textContent = currentWord.english[i];
    wordContainer.appendChild(span);
  }
}

function handleInput() {
  var inputValue = inputElement.value;
  var originalWord = currentWord.english;
  var isDeleteDisabled = false;

  // 检查是否有任何蓝色（匹配）字符被删除
  for (var i = 0; i < inputValue.length; i++) {
    var letterSpan = wordContainer.children[i + 2]; // 跳过中文和空格
    if (inputValue[i] === originalWord[i]) {
      letterSpan.style.color = "#212A3E";
      letterSpan.dataset.matched = true;
    } else {
      typingStats.incorrectChar++; // 错误字符数量增加
      letterSpan.style.color = "#EF5B5B";
      letterSpan.dataset.matched = false;
    }
  }

  // 检查是否有任何蓝色（匹配）字符被删除
  for (var i = inputValue.length; i < originalWord.length; i++) {
    var letterSpan = wordContainer.children[i + 1];
    if (letterSpan.dataset.matched === "true") {
      isDeleteDisabled = true;
      break;
    }
  }

  // 监听 Backspace 键按下事件，并禁用删除已匹配的字符
  inputElement.onkeydown = function (event) {
    if (event.key === "Backspace" && isDeleteDisabled) {
      event.preventDefault();
    }
  };

  // 如果输入的内容与原单词完全匹配，则更新统计信息并切换到下一个单词
  if (inputValue === originalWord) {
    typingStats.correctWords++;
    currentWordIndex++;
    if (currentWordIndex === words.length) {
      // 练习结束
      openModal();
      var endTime = new Date().getTime();
      var totalTime = (endTime - startTime) / 1000; // in seconds
      inputElement.disabled = true;
      wordTime.textContent = totalTime + "秒";
      wordNum.textContent = typingStats.correctWords;
      errNum.textContent = typingStats.incorrectChar;
    } else {
      currentWord = words[currentWordIndex];
      displayWord();
      inputElement.value = "";
    }
  }
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    stopTypingPractice();
  }
}

function handleMouseOut(event) {
  if (event.relatedTarget !== null && event.relatedTarget.id !== "input-word") {
    event.preventDefault();
    inputElement.focus(); // 确保输入框仍然获取焦点
  }
}

function openModal() {
  /**
   *  显示结束模态框
   */
  modal.style.display = "block";
}

function closeModal() {
  /**
   *  隐藏结束模态框
   */
  modal.style.display = "none";
}

/**
 * 停止打字练习
 */
function stopTypingPractice() {
  openModal();
  var endTime = new Date().getTime();
  var totalTime = (endTime - startTime) / 1000; // in seconds
  wordContainer.textContent = "练习已停止！";
  inputElement.disabled = true;
  wordTime.textContent = totalTime + "秒";
  wordNum.textContent = typingStats.correctWords;
  errNum.textContent = typingStats.incorrectChar;
}

inputElement.addEventListener("mouseout", handleMouseOut);
inputElement.addEventListener("input", handleInput);
document.addEventListener("keydown", handleKeyDown);

displayWord();
startTime = new Date().getTime();
