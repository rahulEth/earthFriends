import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/extension/table-data";


const TableComponent = (): React.JSX.Element => {

    return (

        <div>
            <Table className="mb-20">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ACTIVITY TYPE</TableHead>
                    <TableHead className="text-center">FILE</TableHead>
                    <TableHead className="text-center">EARNED TOKEN</TableHead>
                    <TableHead className="text-center">TX HASH</TableHead>
                    <TableHead className="text-center">STATUS</TableHead>
                    <TableHead className="text-center">DATE</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium text-center">tree planted</TableCell>
                    <TableCell className="text-center">tree.png</TableCell>
                    <TableCell className="text-center">100 EFRND</TableCell>
                    <TableCell className="text-center">0x123abc</TableCell>
                    <TableCell className="text-center">pending</TableCell>
                    <TableCell className="text-center">01-11-2024</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        </div>

        

    )

}


export default TableComponent



