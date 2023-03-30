import "./styles/index.sass";

export function Main() {
  return (
    <div className="content">
      <div className="left">
        <div className="text">
          <div className="title">
            Путешествие  
          </div>
          <div className="desc">
            на красную планету
          </div>
        </div>
      </div>
      <div className="planet"></div>
      <div className="grid">
        <div className="item">
          <div>мы</div>
          <div>1</div>
          <div>на рынке</div>
        </div>
        <div className="item">
          <div>гарантируем</div>
          <div>50%</div>
          <div>безопасность</div>
        </div>
        <div className="item">
          <div>календарик за</div>
          <div>2001г.</div>
          <div>в подарок</div>
        </div>
        <div className="item">
          <div>путешествие</div>
          <div>597</div>
          <div>дней</div>
        </div>
      </div>
    </div>
  )
}
