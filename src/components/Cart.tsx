import { useAppSelector } from '@/redux/hook';
import {
  HiMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from 'react-icons/hi';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export default function Cart() {
  const { products } = useAppSelector((state) => state.cart);
  //! Dummy data

  const total = 0;

  //! **

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <HiOutlineShoppingCart size="25" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto relative">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <h1>Total: {total.toFixed(2)}</h1>
        </SheetHeader>
        <div className="space-y-5">
          {products.map((product) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={product.name}
            >
              <div className="border-r pr-5 shrink-0">
                <img src={product?.image} alt="" className="h-full" />
              </div>
              <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-2xl self-center">{product?.name}</h1>
                <p>Quantity: {product.quantity}</p>
                <p className="text-xl">
                  Total Price: {(product.price * product.quantity!).toFixed(2)}{' '}
                  $
                </p>
              </div>
              <div className="border-l pl-5 flex flex-col justify-between">
                <Button>
                  <HiOutlinePlus size="20" />
                </Button>
                <Button>
                  <HiMinus size="20" />
                </Button>
                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-400"
                >
                  <HiOutlineTrash size="20" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
