import { shallowEqual, useSelector } from 'react-redux'

function useStateToProps(selection, equality = shallowEqual) {
  return useSelector(selection, equality)
}

export default useStateToProps
