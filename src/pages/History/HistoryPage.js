import React from 'react'
import useStateToProps from '../../redux/action/readData'
import { useNavigate } from 'react-router-dom'
import '../../styles/HistoryPage.css'
function HistoryPage() {
  const navigate = useNavigate()

  const { history } = useStateToProps((state) => ({
    history: state.historyReducer,
  }))
  return (
    <div className='main-div'>
      {history && history.length > 0 ? (
        history.map((item) => (
          <>
            <div key={item.id} className='history-container'>
              <p className='history-p'>
                Task {item.id} with title : " {item.title} ", description:"
                {item.description} " and status:" {item.status} " was
                {item.typeOfAction}
                on {item.time}
              </p>
            </div>
          </>
        ))
      ) : (
        <>
          <p className='history-no'>No History</p>
        </>
      )}
      <div class='button-container-div'>
        <button type='button' onClick={() => navigate('/taskPage')}>
          Back
        </button>
      </div>
    </div>
  )
}

export default HistoryPage
