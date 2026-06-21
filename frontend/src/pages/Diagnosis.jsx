import { useState } from "react";

import PageHeader from "../components/layout/shared/PageHeader";
import DashboardTopBar from "../components/dashboard/DashboardTopBar";

import UploadZone from "../components/diagnosis/UploadZone";
import DiagnosisHistory from "../components/diagnosis/DiagnosisHistory";
import DiagnosisHistoryModal from "../components/diagnosis/DiagnosisHistoryModal";
import DiagnosisResult from "../components/diagnosis/DiagnosisResult";

import { diagnosisHistory } from "../data/diagnosis/diagnosisHistory";
import { diagnosisResult } from "../data/diagnosis/diagnosisResult";

export default function Diagnosis() {
    const [image, setImage] = useState(null);
    const [showHistory, setShowHistory] = useState(false);

    return (
        <div className="px-4 py-6 lg:px-8">
            <DashboardTopBar/>
            <PageHeader title="Crop Diagnosis" description="AI-powered disease detection and crop health analysis."/>
            <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-12">
                <div className="xl:col-span-9">
                    <UploadZone image={image} onImageChange={setImage}/>
                </div>

                <div className="xl:col-span-3">
                    <DiagnosisHistory history={diagnosisHistory} onViewAll={() => setShowHistory(true)}/>
                </div>
            </div>

            <div className="mt-8">
                <DiagnosisResult result={diagnosisResult}/>
            </div>

            <DiagnosisHistoryModal open={showHistory} onClose={() => setShowHistory(false)} history={diagnosisHistory}/>
        </div>
    );
}