"use client";
import { useEffect, useState, type FC } from "react";
import { useRestaurant } from "@/context/RestaurantContext";
import { getMenuItemById } from "@/lib/get-menu-item-by-id";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Triangle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GetModifiersFromItemId } from "@/lib/get-modifiers-from-item-id";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getCurrencySymbol } from "@/lib/get-currency-symbol";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import type { MenuItem } from "@/types/menu";
import type { CartItemModifier } from "@/types/cart-item.type";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons } from "@/components/Icon";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { isRestaurantOpen } from "@/lib/is-restaurant-open";

interface MenuItemProps {
  id: string;
}

const MenuItems: FC<MenuItemProps> = ({ id }) => {
  const [selectedModifiers, setSelectedModifiers] = useState<MenuItem[]>([]);
  const { items, restaurant } = useRestaurant();
  const item = getMenuItemById(id, items);
  const [quantity, setQuantity] = useState(1);
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  const [price, setPrice] = useState(0);
  const [note, setNote] = useState("");
  const [showNote, setShowNote] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();
  const isOpen = isRestaurantOpen(restaurant);

  useEffect(() => {
    item?.modifiers.map((_, index) =>
      GetModifiersFromItemId(item, items, index).map((modifier) => {
        if (
          modifier._id ===
          item.modifiers.find((modifier) => modifier.defaultSelection)
            ?.defaultSelection
        ) {
          if (selectedModifiers.length === 0) {
            setSelectedModifiers([modifier]);
            setSelectedRadioValue(modifier._id);
          }
        }
      }),
    );
  }, [item, selectedModifiers]);

  const handleModifierChange = (modifier: MenuItem, isChecked: boolean) => {
    setSelectedModifiers((prev) =>
      isChecked
        ? [...prev, modifier]
        : prev.filter((m) => m._id !== modifier._id),
    );
  };

  const handleRadioChange = (modifier: MenuItem) => {
    setSelectedModifiers((prev) => {
      const newModifiers = prev.filter((m) => {
        return !item?.modifiers
          .find((i) => !i.multiSelection)
          ?.items.some((mod) => m._id === mod);
      });
      return [...newModifiers, modifier];
    });
    setSelectedRadioValue(modifier._id);
  };

  useEffect(() => {
    let price = 0;
    if (item) {
      if (item.takeawayPrice.value > 0) {
        price = item.takeawayPrice.value;
      } else if (item.price.value > 0) {
        price = item.price.value;
      } else {
        price = 0;
      }
    }
    for (const selectedModifier of selectedModifiers) {
      if (price) {
        price += selectedModifier.price.value;
      } else {
        price = selectedModifier.price.value;
      }
    }

    if (price) {
      price = parseFloat((price * quantity).toFixed(2));
    }

    setPrice(price);
  }, [item?.price.value, quantity, selectedModifiers]);
  const modifierquantity = (modifier: MenuItem) => {
    const quantity = selectedModifiers.filter((i) => i._id === modifier._id);
    return quantity.length;
  };
  return (
    <section className="bg-menubackground flex w-full flex-col gap-6 px-4 py-10 md:px-[100px]">
      <Button
        className="bg-menuprimary text-menuforeground hover:bg-buttonhover flex w-fit items-center justify-center gap-2 rounded-none px-6 py-6 font-manrope text-lg font-[600]"
        onClick={() => router.push("/menu")}
      >
        <Image
          src="/images/arrowleft.svg"
          width={26}
          height={19}
          alt="Back"
          className="h-5 w-5"
        />
        <span className="leading-none">Menu</span>
      </Button>

      <div className="mb-[13vh] flex w-full items-start justify-center gap-5">
        <div
          className={cn(
            "flex w-full max-w-[700px] flex-col items-start justify-center gap-4 bg-[#111] px-5 py-5",
            item?.modifiers.length !== 0 && "w-1/3",
            !item && "hidden h-0 w-0",
          )}
        >
          <div className="relative w-full">
            <div className="absolute left-0 top-0 z-20 flex h-full w-full items-end justify-center overflow-hidden">
              <Image
                src="/images/image.svg"
                width={1175}
                height={119}
                alt="image"
                className="h-auto w-full object-cover"
              />
            </div>
            {item &&
            item.images.length > 0 &&
            !item?.extras?.hideMenuThumbNailImages ? (
              item && (
                <Image
                  src={item.images[0]!}
                  className="h-auto w-full object-cover md:max-h-[350px]"
                  alt="image"
                  width={1980}
                  height={1080}
                />
              )
            ) : (
              <div className="z-10 h-[350px] w-full bg-black/30 object-cover md:max-h-[350px]"></div>
            )}
          </div>
          <p className="text-menusecondary font-manrope text-2xl font-[700] tracking-[1px]">
            {item?.name}
          </p>
          <p className="text-itemdescription max-w-[70%] font-manrope text-base font-[500] lowercase">
            {item?.description}
          </p>
          <div className="flex items-center justify-center gap-4">
            <p className="bg-menusecondary-foreground text-menuprimary rounded-full px-4 py-1 text-xl font-[400] tracking-[1.5px]">
              {item && item.takeawayPrice.value > 0 ? (
                <>
                  {getCurrencySymbol(item.takeawayPrice.currency)}{" "}
                  {formattedItemPrice(item.takeawayPrice.value)}
                </>
              ) : (
                <>
                  {item && item.price.value > 0 ? (
                    <>
                      {getCurrencySymbol(item.price.currency)}{" "}
                      {formattedItemPrice(item.price.value)}
                    </>
                  ) : (
                    <>
                      {item && item.modifiers.length === 0 ? (
                        <>Free</>
                      ) : (
                        item?.modifiers.map((mod, index) =>
                          GetModifiersFromItemId(item, items, index).map(
                            (modifier) => {
                              if (
                                modifier._id ===
                                item.modifiers.find(
                                  (modifier) => modifier.defaultSelection,
                                )?.defaultSelection
                              ) {
                                return `${getCurrencySymbol(modifier.price.currency)} ${formattedItemPrice(modifier.price.value)}`;
                              }
                            },
                          ),
                        )
                      )}
                    </>
                  )}
                </>
              )}
            </p>
            <p>
              {item?.isVeg && (
                <span className="rounded-full bg-[#1a8425] px-3 py-1 font-manrope text-lg font-[700] text-white">
                  V
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p>
              <span className="rounded-full bg-[#2752a7] px-3 py-1 font-manrope text-sm font-[700] text-white">
                i
              </span>
            </p>
            <p className="text-menusecondary font-manrope text-base tracking-[1px] underline">
              Allergens & Nutrition
            </p>
          </div>
          {showNote ? (
            <div className="flex w-full flex-col gap-2">
              <Label
                htmlFor="note"
                className="text-menuprimary flex cursor-pointer items-center gap-2"
                onClick={() => {
                  setShowNote(false);
                }}
              >
                <Icons.pencil />
                Cooking Instruction
              </Label>
              <Textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="bg-menubackground placeholder:text-placeholder border-none text-[17px]"
                placeholder="write here"
                maxLength={200}
              />
            </div>
          ) : (
            <p
              className="text-menuprimary hover:text-menuprimary flex w-fit cursor-pointer items-center gap-2 hover:underline"
              onClick={() => {
                setShowNote(true);
              }}
            >
              <Icons.pencil />
              Cooking Instructions
            </p>
          )}
        </div>
        <div
          className={cn(
            "flex w-full flex-col gap-5 md:w-2/3",
            item?.modifiers.length === 0 && "hidden w-0",
          )}
        >
          {item?.modifiers.map((mod, index) => {
            return (
              <div className="w-full bg-[#111] p-5" key={index}>
                <div className="border-b-menuprimary flex flex-col items-start justify-center gap-2 border-b-[0.1px] py-3">
                  <div className="flex items-center justify-start gap-5">
                    <Triangle
                      fill="#AA8B55"
                      className="text-menuprimary rotate-90"
                    />
                    <p className="text-menusecondary font-manrope text-xl font-[700] leading-none tracking-[1px]">
                      {mod.header}
                    </p>
                  </div>
                  {mod.required ? (
                    <p className="text-menusecondary font-manrope text-base font-[500] leading-none tracking-[1px]">
                      Select any options (Minimum One)
                    </p>
                  ) : (
                    <p className="text-menusecondary font-manrope text-base font-[500] leading-none tracking-[1px]">
                      Addons are optional.
                    </p>
                  )}
                </div>
                {mod.multiSelection
                  ? item &&
                    GetModifiersFromItemId(item, items, index).length > 0 && (
                      <div>
                        {GetModifiersFromItemId(item, items, index).map(
                          (modifier) => (
                            <div
                              className="border-b-menuprimary flex items-center justify-between gap-5 border-b-[1px] py-5"
                              key={modifier._id}
                            >
                              <div className="flex items-center justify-center gap-5">
                                <Checkbox
                                  id={modifier._id}
                                  checked={selectedModifiers.some(
                                    (m) => m._id === modifier._id,
                                  )}
                                  onCheckedChange={(checked) =>
                                    handleModifierChange(
                                      modifier,
                                      checked as boolean,
                                    )
                                  }
                                  className="border-menuprimary h-6 w-6"
                                />
                                <div className="flex flex-col items-start justify-center">
                                  <Label
                                    htmlFor={modifier._id}
                                    className="text-menusecondary items-center gap-2 text-lg font-[700]"
                                  >
                                    {modifier.name}
                                  </Label>
                                  <Label
                                    htmlFor={modifier._id}
                                    className="text-menusecondary items-center gap-2 font-manrope text-base font-[400]"
                                  >
                                    {modifier.description}
                                  </Label>
                                </div>
                              </div>

                              <div className="flex w-fit items-center justify-center gap-5">
                                {modifierquantity(modifier) > 0 &&
                                  mod.extraAllowed && (
                                    <div className="flex items-center justify-center gap-3">
                                      <Button
                                        className="border-menusecondary text-menusecondary rounded-full border-[2px] bg-transparent p-0 px-2 py-0 transition-all duration-150 ease-out hover:scale-[1.2]"
                                        onClick={() => {
                                          setSelectedModifiers((prev) => {
                                            const index = prev.findIndex(
                                              (m) => m._id === modifier._id,
                                            );
                                            if (index !== -1) {
                                              const newModifiers = [...prev];
                                              newModifiers.splice(index, 1);
                                              return newModifiers;
                                            }
                                            return prev;
                                          });
                                        }}
                                      >
                                        <Minus className="h-4 w-4" />
                                      </Button>
                                      <p className="text-menuprimary text-base font-[500]">
                                        {modifierquantity(modifier)}
                                      </p>
                                      <Button
                                        className="border-menusecondary text-menusecondary rounded-full border-[2px] bg-transparent p-0 px-2 py-0 transition-all duration-150 ease-out hover:scale-[1.2]"
                                        onClick={() => {
                                          setSelectedModifiers((prev) => [
                                            ...prev,
                                            modifier,
                                          ]);
                                        }}
                                      >
                                        <Plus className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  )}
                                <p className="text-menuprimary font-manrope text-lg font-[700] tracking-[1px]">
                                  {modifier.price && modifier.price.value > 0
                                    ? `${getCurrencySymbol(modifier.price.currency)} ${formattedItemPrice(modifier.price.value)}`
                                    : "FREE"}
                                </p>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    )
                  : item &&
                    GetModifiersFromItemId(item, items, index).length > 0 && (
                      <div>
                        <RadioGroup
                          value={selectedRadioValue}
                          onValueChange={(value) => {
                            const selectedradio = GetModifiersFromItemId(
                              item,
                              items,
                              index,
                            ).find((m) => m._id === value);
                            if (selectedradio) {
                              handleRadioChange(selectedradio);
                            }
                          }}
                        >
                          {GetModifiersFromItemId(item, items, index).map(
                            (modifier) => (
                              <div
                                className="border-b-menuprimary flex items-center justify-between gap-5 border-b-[1px] py-5"
                                key={modifier._id}
                              >
                                <div className="flex items-center justify-center gap-5">
                                  <RadioGroupItem
                                    id={modifier._id}
                                    value={modifier._id}
                                    className="border-menuprimary h-6 w-6"
                                  />
                                  <div className="flex flex-col items-start justify-center">
                                    <Label
                                      htmlFor={modifier._id}
                                      className="text-menusecondary items-center gap-2 text-lg font-[700]"
                                    >
                                      {modifier.name}
                                    </Label>
                                    <Label
                                      htmlFor={modifier._id}
                                      className="text-menusecondary items-center gap-2 font-manrope text-base font-[400]"
                                    >
                                      {modifier.description}
                                    </Label>
                                  </div>
                                </div>
                                <div className="flex w-fit items-center justify-center gap-5">
                                  {modifierquantity(modifier) > 0 &&
                                    mod.extraAllowed && (
                                      <div className="flex items-center justify-center gap-3">
                                        <Button
                                          className="border-menusecondary text-menusecondary rounded-full border-[2px] bg-transparent p-0 px-2 py-0 transition-all duration-150 ease-out hover:scale-[1.2]"
                                          onClick={() => {
                                            setSelectedModifiers((prev) => {
                                              const index = prev.findIndex(
                                                (m) => m._id === modifier._id,
                                              );
                                              if (index !== -1) {
                                                const newModifiers = [...prev];
                                                newModifiers.splice(index, 1);
                                                return newModifiers;
                                              }
                                              return prev;
                                            });
                                          }}
                                        >
                                          <Minus className="h-4 w-4" />
                                        </Button>
                                        <p className="text-menuprimary text-base font-[500]">
                                          {modifierquantity(modifier)}
                                        </p>
                                        <Button
                                          className="border-menusecondary text-menusecondary rounded-full border-[2px] bg-transparent p-0 px-2 py-0 transition-all duration-150 ease-out hover:scale-[1.2]"
                                          onClick={() => {
                                            setSelectedModifiers((prev) => [
                                              ...prev,
                                              modifier,
                                            ]);
                                          }}
                                        >
                                          <Plus className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    )}
                                  <p className="text-menuprimary font-manrope text-lg font-[700] tracking-[1px]">
                                    {modifier.price && modifier.price.value > 0
                                      ? `${getCurrencySymbol(modifier.price.currency)} ${formattedItemPrice(modifier.price.value)}`
                                      : "FREE"}
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                        </RadioGroup>
                      </div>
                    )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-40 flex h-fit w-full items-center justify-center gap-10 bg-[#111] py-5 pr-[14%]">
        {restaurant?.onlineOrder &&
          (restaurant?.isDeliveryEnabled || restaurant.isTakeAwayEnabled) && (
            <>
              <div className="flex items-center justify-center gap-5">
                <button
                  className="border-menusecondary text-menusecondary rounded-full border-[2px] bg-transparent px-1 py-1 transition-all duration-150 ease-out hover:scale-[1.2]"
                  onClick={() => {
                    setQuantity((prev) => Math.max(prev - 1, 1));
                  }}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <p className="text-menuprimary font-manrope text-5xl font-[600]">
                  {quantity && quantity}
                </p>
                <button
                  className="border-menusecondary text-menusecondary rounded-full border-[2px] bg-transparent px-1 py-1 transition-all duration-150 ease-out hover:scale-[1.2]"
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                  }}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              {isOpen &&
                item?.extras?.availability?.days.includes(
                  format(Date.now(), "EEEE").toLowerCase(),
                ) &&
                item.extras?.menuItemOrderType === "both" && (
                  <Button
                    className="bg-menuprimary text-menuforeground hover:bg-buttonhover relative flex w-[400px] items-center justify-between rounded-none px-5 py-7 font-manrope text-lg font-[700]"
                    onClick={() => {
                      if (!item) return;

                      const modifiers: CartItemModifier[] =
                        selectedModifiers.map((selectedModifier) => {
                          for (let i = 0; i < item.modifiers.length; i++) {
                            const group = item.modifiers[i];
                            if (!group) continue;

                            const groupItems = GetModifiersFromItemId(
                              item,
                              items,
                              i,
                            );
                            if (
                              groupItems.some(
                                (groupItem) =>
                                  groupItem._id === selectedModifier._id,
                              )
                            ) {
                              return {
                                _idModifiers: group._id,
                                _idMenuItem: selectedModifier._id,
                                price: selectedModifier.price,
                              };
                            }
                          }
                          return {
                            _idModifiers: "",
                            _idMenuItem: selectedModifier._id,
                            price: selectedModifier.price,
                          };
                        });

                      addItem({
                        name: item.name,
                        _idMenuItem: item._id,
                        quantity,
                        price: {
                          value: price ?? 0,
                          currency: item.price.currency,
                        },
                        notes: note,
                        modifiers,
                        images: item.images,
                        description: item.description,
                      });
                      toast.success("Item added to cart");
                      setQuantity(1);
                      setNote("");
                      setSelectedModifiers([]);
                      router.push("/menu");
                    }}
                  >
                    <span className="absolute -top-2 left-4">
                      <Triangle
                        fill="#fbead2"
                        className="text-menusecondary rotate-180"
                      />
                    </span>
                    <span className="font-bold">ADD TO CART</span>{" "}
                    <span>
                      {item && getCurrencySymbol(item.price.currency)}{" "}
                      {price && formattedItemPrice(price)}
                    </span>
                  </Button>
                )}
            </>
          )}
      </div>
    </section>
  );
};

export default MenuItems;
