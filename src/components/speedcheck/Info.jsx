import React from 'react'
const Info = (props) => {
  return (
    <div className="card text-center bg-white">
            <div className='card-header bg-danger text-white'>
                <h3>Yazma Hızı Testi</h3>
            </div>
        <div className="card-body ">
         <p>Alttaki metni kutucuğa girmeye başladığınızda süreniz başlayacaktır.</p>
         <p>Testi bitirmek için <span className="badge badge-info bg-info">'CTRL + Enter'</span> kombinasyonunu kullanınız.</p>
         <p>Ayrıca karakter sınırını aştığınızda test otomatik olarak sonlanacaktır.</p>
        </div>
        <div className='card-footer'>
                <h5>{props.challenge}</h5>
            </div>
      </div>
  )
}
export default Info;
