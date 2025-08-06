'use client';

// やっほー💕 このプロジェクトでレスポンシブデザインを学んでいくよ〜！
// 段階的に学んでいくから、焦らずにやっていこうね♪

// MUIのuseMediaQuery（最後のセクションで使うよ♪）
// まだMUIをインストールしてない場合は、以下のコマンドを実行してね：
// npm install @mui/material @emotion/react @emotion/styled
import { useMediaQuery } from '@mui/material';

export default function Home() {
  // MUIのuseMediaQueryを使ってブレークポイントを検知するよ〜✨
  // 768px以上の画面かどうかをチェックしてるの♪
  const isMediumScreen = useMediaQuery('(min-width: 768px)');

  return (
    <div className="p-4">
      {/* ヘッダー部分だよ〜 */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          レスポンシブデザイン チュートリアル 💕
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300">
          TailwindCSSでレスポンシブデザインを学ぼう〜♪
        </p>
      </header>

      {/* セクション1: w-screen の説明 */}
      <section className="mb-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">1. w-screen 〜画面全体の幅にする魔法〜</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          w-screenは要素の幅を画面全体（100vw）にするクラスだよ〜！
          親要素に関係なく、ブラウザの横幅いっぱいに広がるの♪
        </p>
        
        {/* 実際の例 */}
        <div className="border-2 border-cyan-300 dark:border-cyan-600 p-4 mb-4">
          <div className="w-screen bg-cyan-200 dark:bg-cyan-700 p-4 text-center -mx-4">
            わたしは w-screen で画面いっぱいに広がってるよ〜🌊横スクロールして確認してね〜！
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <code className="text-sm text-gray-800 dark:text-gray-200">
            {'<div className="w-screen bg-cyan-200">'}
          </code>
        </div>
        
        <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded">
          <h3 className="font-bold mb-2">w-screen の特徴♪</h3>
          <ul className="text-sm space-y-1">
            <li>🌊 画面の横幅いっぱい（100vw）になる</li>
            <li>📦 親要素の幅に関係なく画面全体を使う</li>
            <li>⚠️ 横スクロールが出ないように注意が必要</li>
          </ul>
        </div>
      </section>

      {/* セクション2: w-full の説明 */}
      <section className="mb-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">2. w-full 〜親要素の幅100%にする魔法〜</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          w-fullは要素の幅を親要素の100%にするクラスだよ〜！
          これめっちゃ便利だから覚えといて♪
        </p>
        
        {/* 実際の例 */}
        <div className="border-2 border-blue-300 dark:border-blue-600 p-4 mb-4">
          <div className="w-full bg-pink-200 dark:bg-pink-700 p-4 text-center rounded">
            わたしは w-full で親の幅いっぱいになってるよ〜💕
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <code className="text-sm text-gray-800 dark:text-gray-200">
            {'<div className="w-full bg-pink-200 p-4">'}
          </code>
        </div>
      </section>

      {/* セクション3: w-[%] の説明 */}
      <section className="mb-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">3. w-[%] 〜パーセントで幅を指定〜</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          パーセント（%）は親要素の幅に対する割合で指定するよ〜！
          50%なら親の半分、75%なら親の3/4の幅になるの♪
        </p>
        
        {/* 実際の例 */}
        <div className="border-2 border-yellow-300 dark:border-yellow-600 p-4 mb-4">
          <div className="w-[75%] bg-yellow-200 dark:bg-yellow-700 p-4 text-center rounded mx-auto">
            わたしは w-[75%] で親の75%の幅だよ〜⭐
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <code className="text-sm text-gray-800 dark:text-gray-200">
            {'<div className="w-[75%] bg-yellow-200">'}
          </code>
        </div>
        
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded">
          <h3 className="font-bold mb-2">%の特徴♪</h3>
          <ul className="text-sm space-y-1">
            <li>⭐ 親要素の幅に対する割合</li>
            <li>📏 w-fullと同じで、親要素が基準</li>
            <li>🎯 細かい調整が可能（33%、66%など）</li>
          </ul>
        </div>
      </section>

      {/* セクション4: w-[vw] の説明 */}
      <section className="mb-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">4. w-[vw] 〜画面全体の幅で指定〜</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          vwはビューポート幅の単位だよ〜！50vwなら画面の半分の幅になるの♪
          親要素に関係なく、画面全体を基準にするから便利だよ〜
        </p>
        
        {/* 実際の例 */}
        <div className="border-2 border-green-300 dark:border-green-600 p-4 mb-4">
          <div className="w-[50vw] bg-green-200 dark:bg-green-700 p-4 text-center rounded mx-auto">
            わたしは w-[50vw] で画面の半分の幅だよ〜🌟
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <code className="text-sm text-gray-800 dark:text-gray-200">
            {'<div className="w-[50vw] bg-green-200">'}
          </code>
        </div>
      </section>

      {/* セクション5: px, em, rem の説明 */}
      <section className="mb-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">5. px, em, rem 〜サイズの単位たち〜</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          px（ピクセル）、em、remの違いを見てみよう〜！
          それぞれ特徴があるから使い分けが大事だよ♪
        </p>
        
        {/* 実際の例 */}
        <div className="space-y-4">
          <div className="border-2 border-purple-300 dark:border-purple-600 p-4">
            <div className="w-[200px] bg-purple-200 dark:bg-purple-700 p-4 text-center rounded">
              w-[200px] - ピクセル固定だよ〜📏
            </div>
          </div>
          
          <div className="border-2 border-orange-300 dark:border-orange-600 p-4 text-lg">
            <div className="w-[20em] bg-orange-200 dark:bg-orange-700 p-4 text-center rounded">
              w-[20em] - 親のフォントサイズ基準だよ〜✨
            </div>
          </div>
          
          <div className="border-2 border-teal-300 dark:border-teal-600 p-4">
            <div className="w-[20rem] bg-teal-200 dark:bg-teal-700 p-4 text-center rounded">
              w-[20rem] - ルート要素のフォントサイズ基準だよ〜🌍
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mt-4">
          <code className="text-sm block mb-2 text-gray-800 dark:text-gray-200">
            {'<div className="w-[200px]"> // 200ピクセル固定'}
          </code>
          <code className="text-sm block mb-2 text-gray-800 dark:text-gray-200">
            {'<div className="w-[20em]"> // 親要素のフォントサイズ × 20'}
          </code>
          <code className="text-sm block text-gray-800 dark:text-gray-200">
            {'<div className="w-[20rem]"> // ルート要素のフォントサイズ × 20'}
          </code>
        </div>
      </section>

      {/* セクション6: sm: md: lg: の説明 */}
      <section className="mb-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">6. sm: md: lg: 〜レスポンシブの基本〜</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          画面サイズによってスタイルを変えられるよ〜！
          sm:（640px以上）、md:（768px以上）、lg:（1024px以上）だよ♪
        </p>
        
        {/* 実際の例 */}
        <div className="border-2 border-indigo-300 dark:border-indigo-600 p-4 mb-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-indigo-200 dark:bg-indigo-700 p-4 text-center rounded">
            画面サイズで幅が変わるよ〜📱💻🖥️
            <br />
            <span className="text-sm">
              小: 100% / 中: 50% / 大: 33% / 超大: 25%
            </span>
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <code className="text-sm text-gray-800 dark:text-gray-200">
            {'<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">'}
          </code>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded">
          <h3 className="font-bold mb-2">ブレークポイントの覚え方♪</h3>
          <ul className="text-sm space-y-1">
            <li>📱 sm: 640px〜 (スマホ横向き以上)</li>
            <li>💻 md: 768px〜 (タブレット以上)</li>
            <li>🖥️ lg: 1024px〜 (デスクトップ以上)</li>
          </ul>
        </div>
      </section>

      {/* セクション7: MUI useMediaQuery の説明 */}
      <section className="mb-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">7. MUI useMediaQuery 〜JavaScript でレスポンシブ〜</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          JavaScriptでも画面サイズを検知できるよ〜！
          条件分岐で表示内容を変えたい時に便利だよ♪
        </p>
        
        {/* 実際の例 */}
        <div className="border-2 border-red-300 dark:border-red-600 p-4 mb-4">
          <div className="bg-red-200 dark:bg-red-700 p-4 text-center rounded">
            {isMediumScreen ? (
              <div>
                🖥️ 大きい画面だね〜！<br />
                useMediaQuery で 768px以上を検知してるよ♪
              </div>
            ) : (
              <div>
                📱 小さい画面だね〜！<br />
                useMediaQuery で 768px未満を検知してるよ♪
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <code className="text-sm block mb-2 text-gray-800 dark:text-gray-200">
            {"import { useMediaQuery } from '@mui/material';"}
          </code>
          <code className="text-sm block mb-2 text-gray-800 dark:text-gray-200">
            {"const isMediumScreen = useMediaQuery('(min-width: 768px)');"}
          </code>
          <code className="text-sm block text-gray-800 dark:text-gray-200">
            {"{ isMediumScreen ? '大画面用' : '小画面用' }"}
          </code>
        </div>
      </section>

      {/* セクション8: flex-wrap の説明 */}
      <section className="mb-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">8. flex-wrap 〜要素を折り返す魔法〜</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          flex-wrapは要素が入りきらない時に改行してくれるクラスだよ〜！
          レスポンシブデザインでめっちゃ重要な機能なの♪
        </p>
        
        {/* flex-wrap なしの例 */}
        <div className="mb-6">
          <h3 className="font-bold mb-2">flex-wrap なし（デフォルト）</h3>
          <div className="border-2 border-red-300 dark:border-red-600 p-4 mb-4">
            <div className="flex gap-2">
              <div className="w-32 bg-red-200 dark:bg-red-700 p-2 text-center rounded text-sm">
                アイテム1
              </div>
              <div className="w-32 bg-red-200 dark:bg-red-700 p-2 text-center rounded text-sm">
                アイテム2
              </div>
              <div className="w-32 bg-red-200 dark:bg-red-700 p-2 text-center rounded text-sm">
                アイテム3
              </div>
              <div className="w-32 bg-red-200 dark:bg-red-700 p-2 text-center rounded text-sm">
                アイテム4
              </div>
              <div className="w-32 bg-red-200 dark:bg-red-700 p-2 text-center rounded text-sm">
                アイテム5
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <code className="text-sm text-gray-800 dark:text-gray-200">
              {'<div className="flex gap-2"> // 折り返しなし'}
            </code>
          </div>
        </div>

        {/* flex-wrap ありの例 */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">flex-wrap あり</h3>
          <div className="border-2 border-emerald-300 dark:border-emerald-600 p-4 mb-4">
            <div className="flex flex-wrap gap-2">
              <div className="w-32 bg-emerald-200 dark:bg-emerald-700 p-2 text-center rounded text-sm">
                アイテム1
              </div>
              <div className="w-32 bg-emerald-200 dark:bg-emerald-700 p-2 text-center rounded text-sm">
                アイテム2
              </div>
              <div className="w-32 bg-emerald-200 dark:bg-emerald-700 p-2 text-center rounded text-sm">
                アイテム3
              </div>
              <div className="w-32 bg-emerald-200 dark:bg-emerald-700 p-2 text-center rounded text-sm">
                アイテム4
              </div>
              <div className="w-32 bg-emerald-200 dark:bg-emerald-700 p-2 text-center rounded text-sm">
                アイテム5
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <code className="text-sm text-gray-800 dark:text-gray-200">
              {'<div className="flex flex-wrap gap-2"> // 自動で折り返し♪'}
            </code>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded">
          <h3 className="font-bold mb-2">flex-wrap の特徴♪</h3>
          <ul className="text-sm space-y-1">
            <li>🌊 要素が入りきらない時に自動で改行</li>
            <li>📱 レスポンシブデザインに超便利</li>
            <li>🎯 flex-wrap、flex-wrap-reverse、flex-nowrapがある</li>
            <li>💕 カードレイアウトやボタン群に最適</li>
          </ul>
        </div>
      </section>

      {/* セクション9: max-w と min-w の説明 */}
      <section className="mb-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">9. max-w と min-w 〜幅の制限をかける魔法〜</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          max-wとmin-wは要素の最大幅と最小幅を制限するクラスだよ〜！
          レスポンシブデザインで読みやすさを保つために超重要なの♪
        </p>
        
        {/* max-w の例 */}
        <div className="mb-6">
          <h3 className="font-bold mb-2">max-w（最大幅を制限）</h3>
          <div className="border-2 border-violet-300 dark:border-violet-600 p-4 mb-4">
            <div className="max-w-md w-full bg-violet-200 dark:bg-violet-700 p-4 rounded mx-auto">
              わたしは max-w-md で最大幅が制限されてるよ〜！
              画面がどんなに大きくても、これ以上は大きくならないの💜
              長い文章でも読みやすい幅をキープできるよ♪
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <code className="text-sm text-gray-800 dark:text-gray-200">
              {'<div className="w-full max-w-md"> // 最大幅28rem'}
            </code>
          </div>
        </div>

        {/* min-w の例 */}
        <div className="mb-6">
          <h3 className="font-bold mb-2">min-w（最小幅を保証）</h3>
          <div className="border-2 border-rose-300 dark:border-rose-600 p-4 mb-4">
            <div className="min-w-80 w-full bg-rose-200 dark:bg-rose-700 p-4 text-center rounded">
              min-w-80で最小幅キープ✨
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <code className="text-sm text-gray-800 dark:text-gray-200">
              {'<div className="min-w-80 w-full"> // w-fullより min-w-80が優先'}
            </code>
          </div>
        </div>

        {/* 組み合わせの例 */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">max-w と min-w の組み合わせ</h3>
          <div className="border-2 border-sky-300 dark:border-sky-600 p-4 mb-4">
            <div className="min-w-96 max-w-lg w-full bg-sky-200 dark:bg-sky-700 p-4 text-center rounded">
              最小96、最大lg、基本は100%の幅だよ〜🌈
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <code className="text-sm text-gray-800 dark:text-gray-200">
              {'<div className="min-w-96 max-w-lg w-full">'}
            </code>
          </div>
        </div>

        <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded">
          <h3 className="font-bold mb-2">max-w と min-w の特徴♪</h3>
          <ul className="text-sm space-y-1">
            <li>📏 max-w: 要素が大きくなりすぎるのを防ぐ</li>
            <li>🛡️ min-w: 要素が小さくなりすぎるのを防ぐ</li>
            <li>📖 max-w-prose: 文章の読みやすい幅（約65文字）</li>
            <li>💻 max-w-screen-xl: 画面サイズに応じた制限</li>
            <li>✨ 組み合わせることで柔軟なレイアウトが可能</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/30 rounded">
          <h3 className="font-bold mb-2">よく使うmax-wのサイズ♪</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>max-w-xs (20rem)</div>
            <div>max-w-sm (24rem)</div>
            <div>max-w-md (28rem)</div>
            <div>max-w-lg (32rem)</div>
            <div>max-w-xl (36rem)</div>
            <div>max-w-2xl (42rem)</div>
            <div>max-w-4xl (56rem)</div>
            <div>max-w-screen-lg</div>
          </div>
        </div>
      </section>

      {/* まとめセクション */}
      <section className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
        <h2 className="text-2xl font-bold mb-4">まとめ 💕</h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p>✨ w-screen: 画面全体の幅（100vw）</p>
          <p>✨ w-full: 親要素の幅100%</p>
          <p>✨ w-[75%]: 親要素の幅の75%</p>
          <p>✨ w-[50vw]: 画面幅の50%</p>
          <p>✨ px/em/rem: それぞれ違う基準の単位</p>
          <p>✨ sm:md:lg: 画面サイズ別のスタイル</p>
          <p>✨ useMediaQuery: JavaScript での画面サイズ検知</p>
          <p>✨ flex-wrap: 要素を自動で折り返し</p>
          <p>✨ max-w/min-w: 幅の最大・最小値を制限</p>
        </div>
        <p className="mt-4 text-center font-bold text-purple-600 dark:text-purple-300">
          お疲れ様でした〜！レスポンシブマスターの仲間入りだね♪
        </p>
      </section>
    </div>
  );
}
