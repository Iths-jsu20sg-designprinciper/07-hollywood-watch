import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { actions } from '../features/search'
// interface Props {
// 	searchText: string;
// 	setSearchText: (search: string) => void;
// }

const Header = (/*{ searchText, setSearchText }: Props*/) => {
	const dispatch = useDispatch()
	const searchText = useSelector((state: RootState) => state.searchString)

	return (
		<header>
			<h1> Hollywood watch </h1>
			<input type="text" value={searchText}
				onChange={event => dispatch( actions.changeSearchString(event.target.value) )} />
			<span className="magnify-search">🔍</span>
		</header>
	)
}

export default Header
