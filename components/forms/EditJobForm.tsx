"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UpdateJob, UpdateJobSchema } from "@/zod/job";
import { useGetJob } from "@/features/jobs/actions/use-get-job";
import { useEditJob } from "@/features/jobs/actions/use-edit-job";
import { fetchJobDetails } from "@/actions/job";

type NewJobFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const EditJobForm = ({ setOpen, id }: NewJobFormProps) => {
  const [jobDetails, setJobDetails] = useState<UpdateJob | null>(null);
  const editMutation = useEditJob(id);

  useEffect(() => {
    const getJobDetails = async () => {
      const response = await fetchJobDetails(id);
      if (response.status === "success") {
        setJobDetails(response.data || null);
      } else {
        setOpen(false);
      }
    };
    getJobDetails();
  }, [id, setOpen]);

  const form = useForm<UpdateJob>({
    resolver: zodResolver(UpdateJobSchema),
    defaultValues: jobDetails || {
      title: "",
      description: "",
      companyName: "",
      salary: "",
      currency: "",
      location: "",
      status: "",
    },
  });

  useEffect(() => {
    if (jobDetails) {
      form.reset(jobDetails);
    }
  }, [jobDetails]);

  const handleFormSubmit = (values: UpdateJob) => {
    editMutation.mutate(values);
    setOpen(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="h-fit flex flex-col gap-3 p-2"
      >
        <div className="flex flex-col gap-1">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-800">
                  Job Title *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full border-gray-400"
                    placeholder="Job Title"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-1">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-800">
                  Description *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full border-gray-400"
                    placeholder="Enter description here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-1">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-800">
                  Company Name *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full border-gray-400"
                    placeholder="Enter company name here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="text-sm font-semibold text-gray-800"
            htmlFor="salary"
          >
            Salary *
          </label>
          <div className="flex justify-center items-center gap-2">
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="INR">INR</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full border-gray-400"
                      placeholder="Enter salary here"
                    />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-800">
                  Location *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="REMOTE">Remote</SelectItem>
                    <SelectItem value="HYBRID">Hybrid</SelectItem>
                    <SelectItem value="OFFICE">Office</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-800">
                  Status *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                    <SelectItem value="INACTIVE">INACTIVE</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex justify-end items-center mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditJobForm;
