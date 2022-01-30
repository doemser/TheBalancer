import React from "react";
import useStore from "../../useStore";
import List from "../molecules/list";
import Flex from "../ions/flex";
import IconButton from "../atoms/icon-button";
import icons from "../ions/icons";

import Booking from "../molecules/booking";
import BookingEdit from "../molecules/booking-edit";

const AccountList = () => {
  const account = useStore((state) => state.account);

  return (
    <>
      {account?.map((booking, index) => {
        return (
          <List key={index} balance={booking.amount}>
            <Flex justify={"flex-start"} align={""}>
              <IconButton
                type="edit"
                edit={booking.edit}
                index={index}
                icon={booking.edit ? icons.save : icons.edit}
              />
              {booking.edit ? (
                <BookingEdit
                  title={booking.editValueTitle}
                  amount={booking.editValueAmount}
                  date={booking.editValueDate}
                  index={index}
                />
              ) : (
                <Booking
                  title={booking.title}
                  date={booking.date}
                  amount={booking.amount}
                />
              )}

              <IconButton type="delete" index={index} icon={icons.delete} />
            </Flex>
          </List>
        );
      })}
    </>
  );
};

export default AccountList;
