# Windows + Chrome + micro:bit 「Web地図案内」最小サンプル

## 何ができる？
WindowsのChromeで簡単な建物地図を表示し、
「現在地 → 目的地」の経路に沿って U/D/L/R をmicro:bitへBluetooth送信します。
micro:bitは受け取った方向をLEDに矢印表示します。

## 必要なもの
- Windows 10/11
- Google Chrome（Web Bluetooth対応）
- Bluetooth搭載PC
- micro:bit（Bluetooth対応）
- micro:bit用USBケーブル

## 1. micro:bit側
1. https://makecode.microbit.org/ をChromeで開く
2. 新しいプロジェクトを作る
3. `microbit_map_makecode.js` の内容をJavaScript側に貼り付ける
4. micro:bitへ転送する
5. micro:bitに `MAP` と表示されれば準備完了

## 2. Webページ側
Web Bluetoothは、Chromeのセキュリティ上、ローカルファイルを直接開く方法より
`localhost`で配信する方法が確実です。

WindowsでPythonが使える場合：
1. このフォルダを開く
2. アドレスバーに `cmd` と入力してコマンドプロンプトを開く
3. 次を実行：
   `py -m http.server 8000`
4. Chromeで次を開く：
   `http://localhost:8000/`
5. 「micro:bitに接続」を押す
6. micro:bitを選択

Pythonが入っていない場合は、別の簡易ローカルWebサーバーでも構いません。

## 3. 操作
1. 「現在地を設定」を押す
2. 地図のマスをクリック
3. 「目的地を設定」を押す
4. 別のマスをクリック
5. 「経路を表示」
6. 「micro:bitへ案内を送る」

micro:bitに順番に ↑ ↓ ← → が表示されます。

## 仕組み
Webページ（JavaScript）
    ↓ Bluetooth UART
micro:bit

micro:bit側ではBluetooth UARTサービスを開始し、
Webページから受け取った文字を矢印に変換しています。

## 発展例
- 建物の実際の平面図にする
- 複数の部屋を目的地にする
- 階段・エレベーターを入れる
- 「現在地」を人感センサーなどから取得する
- LEDだけでなく音や振動も使う
- 実際に人に歩いてもらい、案内方法を比較する
