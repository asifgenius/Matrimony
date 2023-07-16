
import SentCard from "./SentCard";
import SentFilters from "./SentFilters";
import './SentItems.css'

function SentItems() {
	return (
		<>
			<div className="d-flex sent-background">
				<SentFilters></SentFilters>
				<SentCard></SentCard>
			</div>
		</>)

}

export default SentItems;