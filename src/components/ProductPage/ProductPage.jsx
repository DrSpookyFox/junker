
// Example 2
// Using React Installing dependencies
/// npm install @headlessui/react @heroicons/react

const productPage2 = [
    {
      title: 'Table',
      id: '123456',
      caption: "used table",
      image: 'https://images.unsplash.com/',
    },
    {
        title: 'Desk',
        id: '345678',
        caption: "cherry desk",
        image: 'https://images.unsplash.com/',
    },
    {
        title: 'tv stand',
        id: '456789',
        caption: "used tv stand",
        image: 'https://images.unsplash.com/',
    },
  ]

  
  const  ProductPage2=() => {
    return (
      <ul className="divide-y divide-gray-200">
        {productPage2.map((product) => (
          <li key={title.id} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={product.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{product.caption}</p>
              <p className="text-sm text-gray-500">{product.id}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  export default function ProductPage2



  ////

//   const ProductPage3=({ product }) {
    
   
//     return (
//       <li className="py-4 flex">
//         <img className="h-10 w-10 rounded-full" src={product.image} alt="" />
//         <div className="ml-3">
//           <p className="text-sm font-medium text-gray-900">{product.caption}</p>
//           <p className="text-sm text-gray-500">{product.id}</p>
//         </div>
//       </li>
//     )
//   }
  
//   export default function HockeyTeamList({ teams }) {
//     return (
//       <ul className="divide-y divide-gray-200">
//         {teams.map((team) => <HockeyTeamItem key={team.id} team={team} />)}
//       </ul>
//     )
//   }
