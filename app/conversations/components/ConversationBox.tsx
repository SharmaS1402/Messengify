import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import {Conversation, Message, User} from '@prisma/client';
import {format} from 'date-fns';
import { useSession } from "next-auth/react";
import clsx from "clsx";


const ConversationBox = () => {
    return (
        <div>
            ConversationBOx
        </div>
    )
};

export default ConversationBox;