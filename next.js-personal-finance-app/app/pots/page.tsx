"use client";
// React
import {useEffect, useState} from "react";
// Types
import {Pots} from "@/types";
// Services
import {fetchPots} from "@/services/pots-service";
// Style
import style from "./style.module.css";
// Components
import PageTitle from "@/components/page-title";
import PotBox from "@/components/pot-box";
import Button from "@/components/button";
// Components: Loading
import Loading from "./loading";
import PotBoxLoading from "@/components/pot-box/loading";
// Components: Modals
import ManagePotModal from "@/components/modals/pot-modals/manage-pot";

export default function PotsPage() {
  const [pots, setPots] = useState<Pots[]>([]);
  const potsUsedThemes = pots.map((pot) => pot.theme);
  // Modal Add New State
  const [addNewModal, setAddNewModal] = useState<boolean>(false);
  // Loading State
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch Pots
  useEffect(() => {
    (async () => {
      const response = await fetchPots();
      setPots(response);
      setLoading(false);
    })();
  }, []);

  // Loading
  if (loading) {
    return (
      <>
        <Loading />
        <section className={style.container}>
          {Array.from({length: 6}).map((_, index) => (
            <PotBoxLoading key={index} />
          ))}
        </section>
      </>
    );
  }

  // Modal Handle Click
  const addNewPot = (item: Pots) => {
    if (item.name == "") return alert("Name cannot be empty!");
    if (!(item.target > 0)) return alert("Set the target amount!");
    if (potsUsedThemes.includes(item.theme)) return alert("This color has been used before");
    setPots([...pots, item]);
    setAddNewModal(false);
  };

  return (
    <>
      <PageTitle title="Pots" />
      <Button title="+ Add New Pot" setState={setAddNewModal} />
      <section className={style.container}>
        {pots.length > 0 ? (
          pots.map((pot, index) => <PotBox key={index} pot={pot} setPots={setPots} usedTheme={potsUsedThemes} />)
        ) : (
          <p>empty</p>
        )}
      </section>
      {addNewModal && (
        <ManagePotModal
          type="add"
          setModalIsActive={setAddNewModal}
          handleClick={addNewPot}
          usedThemes={potsUsedThemes}
        />
      )}
    </>
  );
}
