import React from "react";
import { useObject } from "react-firebase-hooks/database";
import { database } from "./firebase";

export default function Ranking() {
  const [rawValues, loading, error] = useObject(database.ref("streams"));
  if (error) {
    return <div>{error.code}</div>;
  }
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (!rawValues.val()) {
    return <div>No data</div>;
  }
  const values = {};
  // Only total score
  // Object.values(rawValues.val()).forEach((day) => {
  //   Object.keys(day).forEach((userId) => {
  //     const user = day[userId];
  //     const { linesSent } = user;
  //     console.log(values[userId], linesSent);

  //     if (values[userId] === undefined) {
  //       values[userId] = user;
  //     } else {
  //       values[userId].linesSent += linesSent;
  //     }
  //   });
  // });

  const dates = Object.keys(rawValues.val());

  Object.keys(rawValues.val()).forEach((day) => {
    const users = rawValues.val()[day];
    Object.keys(users).forEach((userId) => {
      const user = users[userId];
      const { linesSent } = user;

      if (values[userId] === undefined) {
        values[userId] = { ...user, userId };
      } else {
        values[userId].linesSent += linesSent;
      }

      values[userId][day] = linesSent;
    });
  });

  const ranking = Object.values(values)
    .map((user) => {
      const bonus = dates.reduce((previous, current) => {
        if (user[current]) {
          return previous + 100;
        }
        return previous;
      }, 0);
      return { ...user, bonus };
    })
    .sort((a, b) => b.linesSent + b.bonus - (a.linesSent + a.bonus))
    .map((user, i) => {
      return (
        <tr key={user.userId}>
          <td>
            <Place index={i} />
          </td>
          <td>{user.name}</td>
          <td>{user.linesSent + user.bonus}</td>
          {dates.map((date, i) => (
            <td key={date + i}>{user[date] ? user[date] : "-"}</td>
          ))}
          <td>{user.bonus}</td>
        </tr>
      );
    });

  const dateTitles = dates.map((date) => <th key={date}>{date.slice(5)}</th>);

  return (
    <div
      className="nes-table-responsive"
      style={{
        overflow: "scroll",
        height: "calc(100vh - 360px)",
      }}
    >
      <table className="nes-table is-bordered is-centered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            {dateTitles}
            <th>Bonus</th>
          </tr>
        </thead>
        <tbody>{ranking}</tbody>
      </table>
    </div>
  );
}

function Place({ index }) {
  switch (index) {
    case 0:
      return (
        <img src="https://i.imgur.com/IlqB05e.png" alt="first place trophy" />
      );
    case 1:
      return (
        <img src="https://i.imgur.com/ztQITNu.png" alt="second place trophy" />
      );
    case 2:
      return (
        <img src="https://i.imgur.com/cxEhVvS.png" alt="third place trophy" />
      );
    default:
      return <>{index + 1}</>;
  }
}
