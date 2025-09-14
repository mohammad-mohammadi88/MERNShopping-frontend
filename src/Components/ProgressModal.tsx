import type { FC } from "react";
import { Modal, Progress } from ".";

interface Props {
    progress: number;
}

const ProgressModal: FC<Props> = ({ progress }) => (
    <Modal isOpen={0 < progress && progress < 1} onClose={() => {}}>
        <div className="fixed inset-0 z-2000 bg-white flex justify-center items-center">
            <div className="w-xs sm:w-sm md:w-md">
                <Progress progress={progress} />
            </div>
        </div>
    </Modal>
);
export default ProgressModal;
