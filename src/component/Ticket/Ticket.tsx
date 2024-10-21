import style from "./style.module.css";

export interface TicketTime {
  startTime: string;
  endTime: string;
}

export interface TicketType {
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

interface TicketProps {
  ticket: TicketType;
}

export default function Ticket({ ticket }: TicketProps) {
  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}мин`;
  };

  const duration = formatDuration(ticket.duration);

  return (
    <div className={style.ticket}>
      <div className={style.heading}>
        <h2>
          {ticket.price} {ticket.currency}
        </h2>
        <h3>{ticket.company}</h3>
      </div>
      <div className={style.details}>
        <div className={style.detail}>
          <p className={style.detailTitle}>
            {ticket.from} - {ticket.to}
          </p>
          <p>
            {ticket.time.startTime} - {ticket.time.endTime}
          </p>
        </div>
        <div className={style.detail}>
          <p className={style.detailTitle}>В пути</p>
          <p> {duration}</p>
        </div>
        <div className={style.detail}>
          <p className={style.detailTitle}>Пересадки</p>
          <p> {ticket.connectionAmount} пересадка</p>
        </div>
      </div>
    </div>
  );
}
