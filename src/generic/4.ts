/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

import { string } from "joi";

class Component <T>{
  constructor (public props:T) {

  }
}
interface PageTitle {
  title:string
}
class Page extends Component <PageTitle>{
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};