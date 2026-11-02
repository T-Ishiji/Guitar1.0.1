// v1.0.1 動作確認例
// 1) 深く倒してCを鳴らす
// 2) 中央へ戻す
// 3) 同じ方向へもう一度深く倒す
// -> Cをもう一度連続して鳴らせる
//
// 停止帯へ少し倒した場合は、再発音せずミュートだけ。
// 入力がなければ約2秒で疑似フェードアウト。
guitarchord.setDelay(100)
guitarchord.assignChord(guitarchord.ChordButton.NoButton, guitarchord.Chord.C)
guitarchord.assignChord(guitarchord.ChordButton.Button1, guitarchord.Chord.G)
guitarchord.assignChord(guitarchord.ChordButton.Button2, guitarchord.Chord.Am)
guitarchord.assignChord(guitarchord.ChordButton.Button1Button2, guitarchord.Chord.F)
