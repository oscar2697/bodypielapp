import { MdStar } from 'react-icons/md'
import producto1 from '../assets/productos/producto1.jpg'

const ProductDisplay = (props) => {
    const {product} = props
    return (
        <section>
            <div className='flex flex-col gap-14 xl:flex-row'>
                <div className='flex gap-x-2 xl:flex-1'> 
                    <div className='flex flex-col gap-[7px] flex-wrap '>
                        <img src={producto1} alt='' className='max-h-[99px]'/>
                    </div>

                    <div>
                        <img src={product.image} />
                    </div>
                </div> 
            

                <div className='flex-col flex xl:flex-[1.2px] '>
                    <h3 className='h3'>{product.name} </h3>
                    <div className='flex gap-x-2 text-secondary medium-22'>
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                        <p>(111) </p>
                    </div>

                    <div className='flex gap-x-6 medium-20 my-4'>
                        <div className='line-through'>{product.old_price}</div>
                        <div className='text-secondary'>{product.new_price}</div>
                    </div>
                </div>

                <div className='mb-4'>
                    <p>
                        <span className='medium-16 text-tertiary'>Category: </span>
                        Productos | Kit
                    </p>
                    <p>
                        <span className='medium-16 text-tertiary'>Tags: </span>
                        Modern | Latest
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProductDisplay
