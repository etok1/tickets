import React, { useEffect } from "react";
import style from "./style.module.css";
import Ticket from "../Ticket/Ticket";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchTickets } from "../../Slices/TicketsSlice";

export interface TicketTime {
  startTime: string;
  endTime: string;
}

export interface Ticket {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: "RUB";
  time: TicketTime;
  duration: number;
  connectionAmount: number | null;
}

export default function Tickets() {
  const dispatch = useDispatch<AppDispatch>();
  const tickets = useSelector(
    (state: RootState) => state.ticketsReducer.tickets
  );
  const filteredTickets = useSelector(
    (state: RootState) => state.ticketsReducer.filteredTickets
  );

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const checkedTickets = filteredTickets.length > 0 ? filteredTickets : tickets;

  return (
    <div className={style.tickets}>
      {checkedTickets.length > 0 ? (
        checkedTickets.map((ticket: Ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))
      ) : (
        <p>No tickets available</p>
      )}
    </div>
  );
}
