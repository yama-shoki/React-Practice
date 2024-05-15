import Link from 'next/link';

export const Contents = (): JSX.Element => {
  return (
    <div>
      <div className=" flex flex-col items-center ">
        <h2 className="text-5xl ">React学習</h2>
        <div className="mt-7">
          <Link href="practice/01">1:見た目だけのコンポーネント</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/02">2:カウントアップ</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/03">3:テキスト表示・非表示</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/04">4:インプットの入力内容を表示</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/05">5:ボタンクリックで背景色を変更</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/06">6:フィードバックを表示</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/07">7:クイズアプリ</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/08">8:デジタルタイマー</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/09">9:名言表示アプリ</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/10">10:タイマーアプリ</Link>
        </div>
        <div className="mt-7">
          <Link href="practice/11">11:スターウォーズAPIアプリ</Link>
        </div>
        <div className="mt-7">
          <Link href="practice/12">12:ポケモンAPIアプリ</Link>
        </div>
        <div className="mt-7">
          <Link href="practice/13">13:TODOアプリ</Link>
        </div>
        <div className="mt-7">
          <Link href="practice/14">14:React-hook-form</Link>
        </div>
        <div className="mt-7">
          <Link href="practice/15">15:自力でTODOアプリ</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/16">16:自力でポケモンAPIアプリ</Link>
        </div>
        <div className="mt-7">
          <Link href="practice/17">17:ユーザー検索アプリ</Link>
        </div>
        <div className="mt-7">
          <Link href="practice/18">18:自力でreact-hook-form part1</Link>
        </div>
        <div className="mt-7">
          <Link href="practice/19">19:自力でスターウォーズAPI useSWR ver.</Link>
        </div>

        <div className="mt-7">
          <Link href="practice/20">20:自力でreact-hook-form part2</Link>
        </div>
      </div>
    </div>
  );
};
