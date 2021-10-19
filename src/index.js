const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createImcompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createImcompleteList = (text) => {
  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンのliを未完了リストから削除
    deleteFromImcompleteList(div.parentNode);

    // 完了リストに追加する要素
    const addTarget = div.parentNode;

    // TODO内容テキスト取得
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    // div以下を初期化
    addTarget.firstElementChild.textContent = null;

    // liタグを生成
    const compp = document.createElement("p");
    compp.innerText = text;

    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createImcompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(compp);
    addTarget.appendChild(backButton);

    //　　完了リストに追加
    div.appendChild(compp);
    div.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのliを未完了リストから削除
    deleteFromImcompleteList(div.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
