import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";

type StatsTableProps = {
  data: {
    key: string;
    harvested: number;
    height: number;
    fertilizerUsed: number;
    name: string;
    plantsLength: number;
    date: string;
    localIndex: number;
    soilMoisture: number;
  }[];
};

const tableHeaders: string[] = [
  "Date",
  "Plant",
  "Harvested",
  "Height",
  "Fertilizer Used",
  "Soil Moisture",
];

export const StatsTable = ({ data }: StatsTableProps) => {
  console.log(data);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((label, index) => (
            <TableHead key={index}>{label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(
          ({
            key,
            plantsLength,
            date,
            name,
            harvested,
            height,
            fertilizerUsed,
            localIndex,
            soilMoisture,
          }) => (
            <TableRow key={key}>
              {localIndex === 0 && (
                <TableCell className="align-top" rowSpan={plantsLength}>
                  {date}
                </TableCell>
              )}
              <TableCell>{name}</TableCell>
              <TableCell>{harvested}</TableCell>
              <TableCell>{height}</TableCell>
              <TableCell>{fertilizerUsed}</TableCell>
              <TableCell>{soilMoisture}</TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
    </Table>
  );
};
