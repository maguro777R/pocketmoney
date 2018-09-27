(function () {
    'use strict';
    const sengetu = document.getElementById('sengetu');
    const kongetu = document.getElementById('kongetu');
    const button = document.getElementById('button');
    const resultDivided = document.getElementById('result-area');

    /**
     * 指定した要素の子どもをすべて削除する
     * @param {HTMLElement} element HTMLの要素
     */
    function removeAllChildren(element) {
        while (element.firstChild) { // 子どもの要素があるかぎり削除
            element.removeChild(element.firstChild);
        }
    }

    button.onclick = () => {
        const kongetui = kongetu.value
        if (kongetui.length === 0) { // 空のときは処理を終了する
            return;
        }

        //  診断結果表示エリアの作成
        removeAllChildren(resultDivided);
        try {
            const header = document.createElement('h3');
            header.innerText = '計算結果';
            resultDivided.appendChild(header);
            const paragraph = document.createElement('p');
            const resultbb = kongetu.value / sengetu.value * 100;
            const resultb = Math.round(resultbb);
            const result = '前月比は' + resultb + '%です。';
            if (sengetu.value == 0) {
                throw new Error('my error');
            }
            paragraph.innerText = result;
            resultDivided.appendChild(paragraph);

        } catch (err) {
            const paragraphc = document.createElement('p');
            const resultd = '計算できませんでした。';
            paragraphc.innerText = resultd;
            resultDivided.appendChild(paragraphc);
        }
    }

    kongetu.onkeydown = (event) => {
        if (event.keyCode === 13) { //13 番 enter キー
            button.onclick();
        }
    };
})();
