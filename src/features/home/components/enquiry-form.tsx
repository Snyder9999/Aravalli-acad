'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const enquirySchema = z.object({
    studentName: z.string().min(2, 'Student name is required'),
    parentName: z.string().min(2, 'Parent name is required'),
    phone: z.string().min(10, 'Valid phone number is required'),
    classApplying: z.string().min(1, 'Please select a class'),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export function EnquiryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<EnquiryFormData>({
        resolver: zodResolver(enquirySchema),
    });

    const onSubmit = async (data: EnquiryFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Enquiry submitted:', data);
        toast.success('Enquiry submitted successfully! We will contact you soon.');
        reset();
        setIsSubmitting(false);
    };

    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left: Info */}
                    <div>
                        <h2 className="mb-6 text-4xl font-bold text-gray-900">
                            Enroll With Us
                        </h2>
                        <p className="mb-8 text-lg text-gray-600">
                            Take the first step towards quality education. Fill out the enquiry form and
                            our admissions team will get in touch with you.
                        </p>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <h3 className="font-semibold">Admission Process:</h3>
                                <ol className="ml-5 mt-2 list-decimal space-y-1">
                                    <li>Submit enquiry form</li>
                                    <li>Receive admission details</li>
                                    <li>Visit campus (optional)</li>
                                    <li>Complete application</li>
                                    <li>Document verification</li>
                                    <li>Admission confirmation</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="rounded-2xl bg-white p-8 shadow-xl text-gray-900">
                        <h3 className="mb-6 text-2xl font-bold text-gray-900">Admission Enquiry</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <Label htmlFor="studentName">Student Name *</Label>
                                <Input
                                    id="studentName"
                                    {...register('studentName')}
                                    placeholder="Enter student name"
                                    className="mt-1"
                                />
                                {errors.studentName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.studentName.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="parentName">Parent Name *</Label>
                                <Input
                                    id="parentName"
                                    {...register('parentName')}
                                    placeholder="Enter parent name"
                                    className="mt-1"
                                />
                                {errors.parentName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.parentName.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="phone">Phone Number *</Label>
                                <Input
                                    id="phone"
                                    {...register('phone')}
                                    placeholder="Enter phone number"
                                    className="mt-1"
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="classApplying">Class Applying For *</Label>
                                <Select onValueChange={(value) => setValue('classApplying', value)}>
                                    <SelectTrigger className="mt-1">
                                        <SelectValue placeholder="Select class" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="class-1">Class 1</SelectItem>
                                        <SelectItem value="class-2">Class 2</SelectItem>
                                        <SelectItem value="class-3">Class 3</SelectItem>
                                        <SelectItem value="class-4">Class 4</SelectItem>
                                        <SelectItem value="class-5">Class 5</SelectItem>
                                        <SelectItem value="class-6">Class 6</SelectItem>
                                        <SelectItem value="class-7">Class 7</SelectItem>
                                        <SelectItem value="class-8">Class 8</SelectItem>
                                        <SelectItem value="class-9">Class 9</SelectItem>
                                        <SelectItem value="class-10">Class 10</SelectItem>
                                        <SelectItem value="class-11-science">Class 11 (Science)</SelectItem>
                                        <SelectItem value="class-11-arts">Class 11 (Arts)</SelectItem>
                                        <SelectItem value="class-12-science">Class 12 (Science)</SelectItem>
                                        <SelectItem value="class-12-arts">Class 12 (Arts)</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.classApplying && (
                                    <p className="mt-1 text-sm text-red-600">{errors.classApplying.message}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
