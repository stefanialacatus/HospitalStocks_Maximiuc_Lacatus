package com.example.demo;

import com.example.demo.DrugStock.DrugStockDAO;
import com.example.demo.Illness.IllnessDAO;
import com.example.demo.Patient.PatientDAO;
import com.example.demo.Supplier.SupplierDAO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    @GetMapping("/summary")
    public Map<String, Object> getDashboardSummary() {
        Map<String, Object> dashboardSummary = new HashMap<>();

        Map<String, Object> inventorySummary = new HashMap<>();
        inventorySummary.put("status", DrugStockDAO.checkInventoryStatus());
        inventorySummary.put("medicinesInStock", DrugStockDAO.checkMedicinesInStock());
        inventorySummary.put("medicineShortage", "False");
        dashboardSummary.put("inventory", inventorySummary);

        Map<String, Object> quickReportSummary = new HashMap<>();
        quickReportSummary.put("medicinesConsumed", DrugStockDAO.getMedicinesConsumed());
        quickReportSummary.put("numberOfEntries", DrugStockDAO.getNumberOfEntries());
        dashboardSummary.put("quickReport", quickReportSummary);

        Map<String, Object> myHospitalSummary = new HashMap<>();
        myHospitalSummary.put("totalSuppliers", SupplierDAO.getCount());
        myHospitalSummary.put("budget", DrugStockDAO.getBudget());
        dashboardSummary.put("myHospital", myHospitalSummary);


        Map<String, Object> patientsSummary = new HashMap<>();
        patientsSummary.put("totalPatients", PatientDAO.getCount());
        patientsSummary.put("mostUsedMedicine", PatientDAO.getMostUsedMedicine());
        dashboardSummary.put("patients", patientsSummary);

        Map<String, Object> illnessSummary = new HashMap<>();
        illnessSummary.put("totalIllnesses", IllnessDAO.getCount());
        dashboardSummary.put("illnesses", illnessSummary);
        return dashboardSummary;
    }
}