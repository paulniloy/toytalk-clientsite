import React from 'react';

const Addtoy = () => {
    return (
        <div className='bg-indigo-200'>
            <form>
                <input type="text" name="productname" id="" />
                <input type="url" name="photo" id="" />
                <input type="text" name="seller" id="" />
                <input type="email" name="email" id="" />
                <input type="text" name="price" id="" />
                <input type="text" name="rating" id="" />
                <input type="text" name="quantity" id="" />
                <input type="text" name="description" id="" />
                <select value="">
                    <option value={'language'} name="languagetoys" id="">Language</option>
                    <option value={'math'} name="mathtoys" id="">Math</option>
                    <option value={'science'} name="sciencetoys" id="">Science</option>
                </select>
            </form>
        </div>
    );
};

export default Addtoy;