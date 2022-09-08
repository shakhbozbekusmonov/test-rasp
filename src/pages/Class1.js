import React from 'react';

const Class1 = () => {
    return (
        <>
         <table className='table table-hover table-striped'>
             <thead style={{backgroundColor: "#1C61AC"}}>
             <tr>
                 <th>Время</th>
                 <th>Предмет</th>
                 <th>Препод</th>
                 <th>Каб.</th>
             </tr>
             </thead>
             <tbody>
             <tr>
                 <td>09:00</td>
                 <td>English</td>
                 <td>A. Palonchiyev</td>
                 <td>301</td>
             </tr>
             </tbody>
         </table>
        </>
    );
};

export default Class1;
