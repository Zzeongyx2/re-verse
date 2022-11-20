import { useState, useEffect } from "react";

import { Avatar } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import {
  acceptFriend,
  getAcceptFriendList,
  getFriendList,
} from "../../api/friend";
import { imageForm, s3Path } from "../../api";
import { useDispatch } from "react-redux";
import { setFriendList } from "../../modules/friend";

function FriendAccept() {
  const [friendAcceptList, setFriendAcceptList] = useState([]);
  const dispatch = useDispatch();

  const friendAccept = (nickname) => {
    acceptFriend(
      { nickname: nickname, isAccepted: true },
      acceptSuccess,
      acceptFail
    );
  };
  const friendRefuse = (nickname) => {
    acceptFriend(
      { nickname: nickname, isAccepted: false },
      acceptSuccess,
      acceptFail
    );
  };
  const acceptSuccess = (res) => {
    getAcceptList();
  };
  const acceptFail = (error) => {
    console.log(error);
  };
  const getAcceptList = async () => {
    await getAcceptFriendList(getAcceptListSuccess, getAcceptListFail);
  };
  useEffect(() => {
    getAcceptList();
  }, []);
  const getAcceptListSuccess = async (res) => {
    setFriendAcceptList(res.data.waitingFrom);
    await settingFriendList();
  };
  const settingFriendList = async () => {
    await getFriendList(getFriendSuccess, getFriendFail);
  };

  const getFriendSuccess = (res) => {
    dispatch(setFriendList(res.data.friendList));
  };
  const getFriendFail = (error) => {
    console.log(error);
  };
  const getAcceptListFail = (error) => {
    console.log(error);
  };

  return (
    <div className="text-base2">
      <div className="flex justify-between">
        {/* request list */}
        <div className="bg-white rounded-3xl w-[calc(96%/2)] h-[600px] pt-5 pb-6 flex flex-col items-center">
          <div className="w-[calc(100%-70px)] overflow-auto scrollbar-hide">
            {friendAcceptList.map((friend, index) => {
              return (
                <div key={`friendAcceptList-${index}`}>
                  <div className="flex items-center justify-between px-2 py-1">
                    <div className="flex items-center">
                      <Avatar
                        name="profileImg"
                        src={s3Path + friend.avatar + imageForm}
                        size="sm"
                      />
                      <div className="text-base1 px-3">
                        <p className="text-sm font-bold">{friend.nickname}</p>
                        <p className="overflow-hidden text-ellipsis line-clamp-1 text-xs text-zinc-500">
                          {friend.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <button
                        className="mx-1.5"
                        onClick={() => {
                          friendAccept(friend.nickname);
                        }}
                      >
                        <BsCheckCircle className="text-[#4ECB71]" size={22} />
                      </button>
                      <button
                        onClick={() => {
                          friendRefuse(friend.nickname);
                        }}
                      >
                        <BsXCircle className="text-sub4" size={22} />
                      </button>
                    </div>
                  </div>
                  <Divider />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white rounded-3xl w-[calc(96%/2)] h-[600px] pt-5 pb-6 flex flex-col items-center justify-center">
          <p className="font-bold text-3xl mb-6">이거 맞으면 짱 아픔</p>
          <img
            className="aspect-square rounded-full w-3/5"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBASDxAPDxAQEA8QDw8PDxAQDw8QFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGCsdHR0rKy0tLS0tLS0tLS0tKy0rLS0tKy0tLS0tLS0tLSstNzctLSsrKy0rKysrLS0tKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQUCAwQGBwj/xABAEAACAQICBQcJBwMEAwAAAAAAAQIDEQQFEiExQVEGEzJSYXGRFBUiQlNigbHRIzNDcqHB8AcWkjSCk8JUY6L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QAJBEBAAIBAwUBAQEBAQAAAAAAAAECEQMSIQQTIjFRFEEyQiP/2gAMAwEAAhEDEQA/AOHH5i5Qkmjo5Fu6kM2ytRpylHcm7DkNsmdTNdvC/wA+5G96dO7twPJ/1C6EO89pGmkeM/qL0Id5XWeV+t/iVl/T9/YPvPUt226jyn9OHei12npsfh3O2i7FGpzd58Rw3aN9ms8By+Vq9DvXzPe4HDumtbueC/qJUXlFFfzaRp8W4JriMvR4eT0Y9yJzFLm5dxhRn6EbW6KNGPq/Zy1l2OXL5ljvvJ97Pfcmf9PDuPBYv7yfee+5N/6eBV1fpp6f2sqr1PuPJ4aX2j72eqxHRl3M8hgZXn8X8ynpv6567/MPXYZfYvuN+QLUzRhPuZHTkC1PvJt6l5UPQYdazTmNVRetmyFVRKDNOcqVLK9imIystOId2W1tNyceNjmz7Cqbpp7Wy0yLCc3DtucGYT0sTFdVExxPDnb4qytR5maa2Hq8vmpQT4lbPDqpqaO7CLQtHciLWyU4l2sxiZEM5XNMneaXA6LHNhldtnRVlaLfBEwiHDQWnir9SP7l4VGQQ6c3tlJ+BbnoaccL6ei5ABZhL5ZWwWJnFxlPU9TMMDlVejfm52ueiclxRGnHijzP0Xw9KaRM5lU8zi/anHmWS1sQlzlRu2w9HzkeKI5yPFEfouTSJ9yoMuyqvh42p1NG51wWKvrqstHUjxXiYOceK8SJ1rz7cxpUhwz8qf4rKrMcgqV5qdSblJbHc9HzsesvEh14dZeKEa149E6VZUSyqvZLnZWXaa6mS1mtdWT+J6BYmHWj4onyqn14+KOu/dHZo8RmHJeUIympbNbueh5Nr7CH83nRnOJg6M7Si9XE0cn5JYeLbSWvW9SOrXtavKK1rW3DvxXQl3M8dgl6S738z2GjUrpxoUp1LprTto0/8nt+Bqy7kJiFZ1K1KnvtGLm/F2Rb01Z/rP1kb4xDThsRaDjxR35ViFCEm+Oo7FyOl/5T/wCGP1EOSNSLvHEqVt06Ks/BlttLMPO7N3blt6q0pakZVopPYTCOKoqzo06seNGejP8Axl9TjqZhBvRlpUpt9CrFwl8L7fgZbado/jq2nMQu6NtA85QelXqy4Oxf1JaNLujcocrWqUt8pM59RLm/pa4SPpHTiYW1owwEN52SV0cJrHi10J3QxDsjQnoysTiJXaS3kpzw24aNomvMZNQaW16kdMdSK7EVNOvCmti1y+BZSuZdRC1y+loU4rsOi5igejEYhd6ZXBiCR+d5ZpX9rLxZCzGt7WXizjsLHHbr8W75+u5Y+q/xZeLIeOq+1l/kziZNye3X4b5+ux42r7WXizHyyt7SXizlTJTHbr8N8/W2WJq+0l4sw56p7SfiyExpIbI+I3SOrU9pLxMJTqe0l4sXXEt+TnJ+pjqyp09UVrq1N1OP1J2x8MufJMpxWMqc3RcpdeTfoQXFn2DJOSNKhCKrSeInFet90n2Q2fFlrk2UUcJSVOhBRiuk/Wm+LZ3jbVOZRFJKy1JbEtSRIBKAAADTicLTqx0akIzjwkkzcAPPZlltelTksNJ1qdn9jUlecfySe3uZx5ROMqS0XrTtJPVKMt8WtzPWlPm+VNy5+gkq0elHZGvFerLt4Mz6ujExwp1NLPMOvCRtE3HNl+KjVpqUbrdKL6UJLbGS4o2zqqO0wzGJ5VxGGvFQvr4HHhaylJ3fRNmKxfovRRV4KhJa5anJkxCuZ5XksXFbzhyNc5VqVdyeimY46Cp0pNu7asu9lhkeH5ujFb2rvvNPT1zytpEysQCTYuQCbAGHyj+1aPV/Uf2pR6v6ljl2InOmnUWjJ7Ub8RitCDe17l2mjZDz+5fOFQuSWH4ayVyUodUmlmWKf4DsdCxeJ9kc+Kz/ANXL/aNDgbIclcOvVubXi8T7IlYvE+y+ZHiY1Gr+08P1TGfJagvVR0rGYn2XzOfGZliIq7ouy2jgnuKzF5BSi/Rgm21GKW2Um7JL4s+k8lcihgsOoJLTlaVWXGVtncth5zkTbF1ue0XoYfYnvrP6L5nvCNSY9Q0aFbYzYABWvAAAAAAAAAABQ5xF4aarw1U6jUMRHcm3aNX9mdSw7lrkywxNCNSEoTV4zi4yXYyqyirLm3CfToSdKT4qPRl8U0Y+op/1CnUr/WytBXUURiqdkmjZQV22zPFWUXfgZohThV1L1qlOmtkXpS+B6OEbauBU5FhXFOcts238C4Rv0q4qvpXhkCQi1YAAD5lUzOmlv+CNuU0JYmam01TjsvvPRvLaXs4+BvpUoxVopJdhNuozGFFOmis5RGmluRnoIkMz5acIUUZKCISMrjIaK4ETpxad0rWd+4yObNKuhQqy4U5/IZGfJPCxhhlKKS56c63wlL0f0sXJz5fS0KVKPVpwXhFHQaEAAAAAAAAAAAAAAUOKg4YxpbMRRT/303Z/pIviozlaNbByW+rOm+6VNv8A6lerGay4vGYdkI2RXV5urUVOPRWub/Y6MwxOhGy1ylqSN+V4Tm469cpa2zNo0zOVda5dlKKSSW42IhIyNi5IFggAAAqGjFoyDMztg0YmUmRGJIXMkLEpADizuF8PWX/rkd5rxFPShKPWjJeKIFlQleMXxjF/oZnBkNfnMNRlv0FGX5o+i14o7zU5AAAAAAAAAAAAAApOUtXReEsrvyi6XdTkXZW4mKniqEXrVOnUqtcG2ox+bImMwiYyjA4JylzlXpbo7olqkLEnNaxEEVwmwQRJ0mQAEuQAAVRrkZswMqxBKJsCQJuYXJEjK5DZBXZvmqopRitOrJejDcl1pcEIrMzwiZiI5Z8lsUtPE0G9dOo6kF7k9b/W56I+a4WpLD1o4m7lUUvt316T6UUuxa13H0ahVjOMZQalGSTjJbGmaprNfaqmpF/TYACFgAAAAAAAAAABXZTHTqV6/XkqdP8AJT1au+V2RnmLcIKFP72t6FO3qr1pvsSNWGxXNQjCEXowior4E7ZlEyugVazKXVDzOXVGyUboW1wVHnR9Unzr2E7JN0LYFK84fVMXnL6o7dkboXoKHzw+qyR27G6Fc87j1ZEeeo9Vldg8wo1vu5KR0y0VtsR2qsv6bOh53HqyMfPcerI4fLqHWiQ8bR60R2qp/Rb471nC6rJecLqsrlj6PWiasRmULWpWnUfRW5e8+wdmJP0WdWM5QtehTheo9l9kF1mVtOFruTcpy1zm9sn9DHD0dFO70pSd5Se9/Q3GnS0Yryo1ta1+EWO/k3mvk0uZqu1Ccr0pt6qU3+G/de44UY1IJpqSTT2p60yy9ItDjT1JpOX0YHiMmz6eFtTr6VTD7I1NcqlFblLe49p7PD141IqUJRnF61KLumY7Vms8vTpeLRmGwAHLsAAAAADnx+NhRpupUdorZxk90Ut7ObOM5o4WN6kryfRpR11Jdy/c8dUxlXFzVWq0oxf2dJa4w7X73ac2tEHvh6XA05TlKvU6c1aEX+FT3R7+J2NHmPOVaOxsiWbViO9U2TL07SMGjy0s2rcTVLNK/Env1O3L1E4miR5t5pX4mDzKvxOu/Vz2peluQ2jzPnCvxM1mFW2uR1+mqO1L0Vweb85VeIH6analvy/LIYdPRWt7zbiZOVoR1uWr4GypkOIf4vyLDJ8o5rXUlpz48CZ1axHDLGhaZzLjo8k6CV2nd7db2m7+2aC3PxL1mrEVowjKcnaMVdvsM3cs2bKw89j8nwtGDlKLe6MU9c5cEVeEwqhd29KTu+z3V2HRXxEq03UndLZTh1Yce9km/Q05iMy8/qNSJnFQWANLMAAAMJUqUJaWHnzTfSjbSpy74/QA5msT7dVvNfS7wfKyS1YijLtqUfSj3uO1FrhuUGEqbK9NPqzeg/CR48xlTT2pPvSZTbQifTTXqp/r6BHFU3sqU33Ti/3MKuPox1yrUopbb1Ir9z575HS6kfBExwtNbIR/xRz2J+u/1x8erx/LDBUlfnHV12SpRcrvhfYctHO62LX2K8ng/XdpVWuxbEeUzeleMIxXrN6klsiy+5G1Y6Ki9pk6nOnxB35t6VsMpccbablPSV3Kbbk/iZUVzdWrDhLUX+Zw0cTRkt6sVufYXQrxmvXWsyWtNva7Rnyy1uoapSJaMbFT0Ya3Ii5lJGNgMWa2zKoaSYQybMGAdBcC4A+ghkXMi5nYs8tmuO5+ejH7mm/+Sa3/AJUdnKLMnfyek7SavVkvw4P1fzMqYRSSS1JakjX02ju8pZOp1sRthkAD0HnAAJAAAAAAAAAAMga4w0qiXCnWl/8ANjr5P4VpKSey5ry5aVea4Yef6tfQsuTatG3azyOst5TDRSOId+OtJRe+LRzcooXpRl1WjrzCGim9201Yyaq4aTXVMcL9OcWUiWoxZnh36CIkQ9Ws8NbNcjY0YMJaJI1tG9o1ziTBLWyLGTQsShjoAysSB7xI4M7zJYendLSqT9GlDrS4vgltO2rVjCMpSdoxTbfBI8fWxEq9R1ZppPVSi/Uh9WbNLTnUsxaupshroU2ruT0pzblOT2ykzaQSerWu2MQ8m1t05kAB0gAAAAAAAAAAAAAZZCr4mu/cjD9G/wBy4yWNv8mVXJmHpSl151Gu5WX7FxlmqTXvM8HqZzaWqPS2xdHShJdhSYaEoU5xe9Ox6Gps+BXVaV4soiXc+8vm9fGYmMpRg1opu1+81rMcXv0S9836U6mu1pMh5T2muNuG2kzMQoZZhivdIeYYr3S/809oWU9pPg78nn/L8VwRDxuK4RPReaO0eaO0nwT5PO+VYn3SVicT7p6HzSQ8r7R4I8lD5TiPdBe+bO0E4p8M2d2a5osTJU6d+apu9V7py3Q7ltZpRqwmHVOKit2tve29rNx6WlpxSHj6upN7AALVQAAAAAAAAAAAAAGNSVk3wTf6GRqxMbx0VtnKMF/udji84rlMe1vkmH5vmIvbzSb73rfzOvB6py/MzfWio14JbEkl8Dmw7+1mn1j5+85mZal9uOekukjfdJfAq4YzSnOMdz2nEO84VNaNq1RbhcYy6rtPerkM0R6btKfFNzJIxRmgtAZJE2A1s1TN8kaZk1RLXcEg7cuYAHtPBAAAAAAAAAAAAAAAABQd69BWvaem1+VfVg7eTlFTr1ZdSEYrscnf9kZuptt05d6cZlbV5XrQZywlatUvxNVetKniFpa0mVtWvKpiJqN0m0eLFeF2XqnJztbYYYHBqE5Pbc68FT0YJb7EU+kyuOHcQ89nStiI9sTWbuUOqvTfG5pZpr6hv0fQZxMTKIlc2IkhEkDFmmojfY1VETBLTYGdgShxAi4ue5l4G2fiQRf+XF/5cG2fiQRcm4zBtn4AXRFxk2z8SBcXGTbPwAuLjJtn4AXFxk2z8Qy55KJRoyqP8SpN96T0V8ihxdTRhJ70nbXv3Fvk+lJU6cdUIQjHwRg66fGKwt0omGeNm6mIVlq1HHTmqeJmnvLzE0lGpG1tq4FbmGDUsRLWk2lvPNh3MS9Jh5pxVuBFPps5cHPQSTd13o6ack5bvFFeJWQo+U0fTpPtOZo7uUy+7erpcUcL/ms0V9N2j6lFjOJiZRfd4kzC5siZMxRn8V4kYEGE0bNXZ4mE3/NQGrRBn/NwJHxthAHpPPAQCUJMkQCEpMQAJRIAQgABKWQyAEMKmw6cMAU63t3VlPaQ+kAUupZMziAQhpxW40sA6X09AQAdSzJAAghgEiAAQP/Z"
            alt="nothing"
          />
        </div>
      </div>
    </div>
  );
}

export default FriendAccept;
