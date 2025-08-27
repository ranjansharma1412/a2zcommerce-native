export interface IHobby {
    _id: string|number,
    hobbyName: string,
    icon?: string
}

export interface IHobbyData {
    // id: string,
    categoryName: string,
    categoryId:string,
    hobbyList: IHobby[]
}