import { Description, DialogPanel, DialogTitle } from "@headlessui/react";
import clsx from "clsx";
import type { FC } from "react";

import { Modal } from "@AppComponents";

type Role = "confirm" | "success" | "error";
type Props = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title: string;
    role?: Role;
    description: string;
};

const classGenerator = (role: Role) =>
    role === "success"
        ? "bg-green-500 hover:bg-green-700"
        : "bg-red-500 hover:bg-red-700";

const ConfirmDialog: FC<Props> = ({
    isOpen,
    onClose,
    onConfirm,
    role = "success",
    title,
    description,
}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
                <DialogTitle className="text-lg font-semibold">
                    {title}
                </DialogTitle>
                <Description className="mt-2 text-sm text-gray-600">
                    {description}
                </Description>

                <div className="mt-4 flex justify-end gap-2">
                    {role === "confirm" && (
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        onClick={() => {
                            if (onConfirm) onConfirm();
                            onClose();
                        }}
                        className={clsx(
                            "px-4 py-2 text-white rounded cursor-pointer",
                            classGenerator(role)
                        )}
                    >
                        OK
                    </button>
                </div>
            </DialogPanel>
        </div>
    </Modal>
);

export default ConfirmDialog;
