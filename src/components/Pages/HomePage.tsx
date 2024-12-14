import { FC} from "react";
import Card from "../entities/Card";
import { CardVariant } from "../enums/CardVariant";

const HomePage: FC = () => {

    return(
            <div className="flex flex-">
          <Card onClick={() => {}} width='200px' height='200px' variant={CardVariant.outlined}>
            <button>click me</button> 
          </Card>
        </div>
    )
}
export default HomePage;