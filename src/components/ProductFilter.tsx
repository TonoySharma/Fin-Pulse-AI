"use client";

import React, { FormEvent, useState } from "react";
import {
    Select,
    Label,
    Header,
    ListBox,
    InputGroup,
    TextField,
    Button,
} from "@heroui/react";
import FadeUp from "./FadeUp";
import { useRouter } from "next/navigation";
import { BsSearch, BsFilter, BsCashCoin } from "react-icons/bs";

const ProductFilter = () => {
    const router = useRouter();

    const [search, setSearch] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");


    const CATEGORIES: string[] = [
        "All",
        "Incomes",
        "Expenses",
        "Investments",
        "Savings",
        "Assets",
        "Liabilities",
    ];


    const PRICE_RANGES = [
        { label: "All Amounts", value: "all" },
        { label: "Under $100", value: "0-100" },
        { label: "$100 - $500", value: "100-500" },
        { label: "$500 - $2000", value: "500-2000" },
        { label: "Above $2000", value: "2000-above" },
    ];

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = new URLSearchParams();

        // Search
        if (search.trim()) {
            params.set("search", search.trim());
        }

        if (selectedCategory !== "All") {
            params.set("category", selectedCategory);
        }

        switch (selectedPriceRange) {
            case "0-100":
                params.set("minPrice", "0");
                params.set("maxPrice", "100");
                break;
            case "100-500":
                params.set("minPrice", "100");
                params.set("maxPrice", "500");
                break;
            case "500-2000":
                params.set("minPrice", "500");
                params.set("maxPrice", "2000");
                break;
            case "2000-above":
                params.set("minPrice", "2000");
                break;
        }


        router.push(`/all-features?page=1&${params.toString()}`);
    };

    return (
        <FadeUp>
            <form
                onSubmit={onSubmit}
                className="bg-slate-950 text-slate-300 p-5 rounded-2xl border border-slate-800/80 shadow-2xl flex flex-wrap gap-4 items-end w-full"
            >
                {/* 🔍 Search Field */}
                <div className="flex-[1_1_250px] w-full">
                    <TextField
                        value={search}
                        onChange={(value: string) => setSearch(value)}
                        className="w-full text-sm text-slate-200"
                    >
                        <Label className="text-slate-400 font-medium text-xs mb-1.5 flex items-center gap-1.5">
                            <BsSearch className="text-indigo-400" /> Search Records
                        </Label>

                        <InputGroup className="w-full border border-slate-800 bg-slate-900/50 rounded-xl
                         focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all
                          overflow-hidden h-10">
                            <InputGroup.Prefix className="pl-3 pr-2 text-slate-100 flex items-center justify-center">
                                <BsSearch size={14} />
                            </InputGroup.Prefix>

                            <InputGroup.Input
                                name="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by title..."
                                autoComplete="off"
                                className="w-full text-white placeholder-slate-200 px-2 focus:outline-none h-full"/>
                        </InputGroup>
                    </TextField>
                </div>

                {/* Category Filter */}
                <div className="flex-[1_1_200px] w-full">
                    <Select
                        selectedKey={selectedCategory}
                        onSelectionChange={(key) => setSelectedCategory(key as string)}
                    >
                        <Label className="text-slate-400 font-medium text-xs mb-1.5 flex items-center gap-1.5">
                            <BsFilter className="text-indigo-400" /> Category
                        </Label>

                        <Select.Trigger className="w-full flex items-center justify-between bg-slate-900/50 border border-slate-800 rounded-xl px-3 h-10 text-sm text-slate-200 hover:border-slate-700 transition-colors">
                            <Select.Value className="text-white">
                                {selectedCategory || "Select Category"}
                            </Select.Value>
                            <Select.Indicator className="text-slate-400" />
                        </Select.Trigger>

                        <Select.Popover className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl mt-1 overflow-hidden">
                            <ListBox className="p-1 bg-slate-900">
                                <ListBox.Section>
                                    <Header className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Select Category
                                    </Header>

                                    {CATEGORIES.map((category) => (
                                        <ListBox.Item
                                            key={category}
                                            id={category}
                                            textValue={category}
                                            className="px-3 py-2 text-sm text-white rounded-lg hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors focus:bg-indigo-600 focus:text-white outline-none"
                                        >
                                            <span className="text-white font-medium block w-full">{category}</span>
                                        </ListBox.Item>
                                    ))}
                                </ListBox.Section>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                {/* Amount/Price Range Filter */}
                <div className="flex-[1_1_200px] w-full">
                    <Select
                        selectedKey={selectedPriceRange}
                        onSelectionChange={(key) => setSelectedPriceRange(key as string)}
                    >
                        <Label className="text-slate-400 font-medium text-xs mb-1.5 flex items-center gap-1.5">
                            <BsCashCoin className="text-indigo-400" /> Amount Range
                        </Label>

                        <Select.Trigger className="w-full flex items-center justify-between bg-slate-900/50 border border-slate-800 rounded-xl px-3 h-10 text-sm text-slate-200 hover:border-slate-700 transition-colors">
                            <Select.Value className="text-white">
                                {PRICE_RANGES.find((item) => item.value === selectedPriceRange)?.label || "All Amounts"}
                            </Select.Value>
                            <Select.Indicator className="text-slate-400" />
                        </Select.Trigger>

                        <Select.Popover className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl mt-1 overflow-hidden">
                            <ListBox className="p-1 bg-slate-900">
                                <ListBox.Section>
                                    <Header className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Select Amount
                                    </Header>

                                    {PRICE_RANGES.map((item) => (
                                        <ListBox.Item
                                            key={item.value}
                                            id={item.value}
                                            textValue={item.label}
                                            className="px-3 py-2 text-sm text-white rounded-lg hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors focus:bg-indigo-600 focus:text-white outline-none"
                                        >
                                            <span className="text-white font-medium block w-full">{item.label}</span>
                                        </ListBox.Item>
                                    ))}
                                </ListBox.Section>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                {/*  Search Button */}
                <div className="flex-[1_1_auto] w-full min-w-[120px]">
                    <Button
                        type="submit"
                        className="w-full h-10 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/15 active:scale-98"
                    >
                        Search
                    </Button>
                </div>
            </form>
        </FadeUp>
    );
};

export default ProductFilter;