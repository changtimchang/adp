import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "@/components/DatePicker";
import { MainChart } from "@/components/MainChart";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header> */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50">
              <Card>
                <CardHeader>
                  <CardTitle>Bom Data</CardTitle>
                </CardHeader>
                <CardContent className="text-3xl">
                  <p> 3000 </p>
                </CardContent>
                <CardFooter>
                  <DatePicker />
                </CardFooter>
              </Card>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <Card>
                <CardHeader>
                  <CardTitle>CAD data</CardTitle>
                </CardHeader>
                <CardContent className="text-3xl">
                  <p>3000</p>
                </CardContent>
                <CardFooter>
                  <DatePicker />
                </CardFooter>
              </Card>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <Card>
                <CardHeader>
                  <CardTitle>Scan data</CardTitle>
                </CardHeader>
                <CardContent className="text-3xl">
                  <p>3000</p>
                </CardContent>
                <CardFooter>
                  <DatePicker />
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <MainChart />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
