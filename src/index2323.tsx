type FriendType ={
    name:string
    age: number
    statusBestFriend: boolean
    crazyStatus: boolean
}

type CarsType = {
    honda: string[] | SpecsType[]

}
type FriendsCarsType= {
    friends: FriendType[]
    cars: CarsType
}
type SpecsType = {
    dviglo: string
    haveTurbo:boolean
}
type AddressType ={
    city: string
    street: string
    house:number
    appartment:number
}
type KidType = {
    age: number
    likes: string
    hobbies: Array<string>
    address: AddressType
    need: Array<string | FriendsCarsType>
}

type PersonType ={
    heir: string
    arms: number
    legs: number
    kids: KidType
}
type WholeSvetaType ={
    Sveta: PersonType
}